import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import { toast } from "sonner";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import {
  LayoutDashboard, FileText, Users, DollarSign, Shield, ShieldCheck,
  Search, Download, ChevronLeft, ChevronRight, ArrowLeft, Loader2,
  CheckCircle, XCircle, Clock, AlertTriangle, Eye, RefreshCw,
  TrendingUp, LogOut, Settings, Save, QrCode
} from "lucide-react";
import { Label } from "@/components/ui/label";

type ProposalRow = {
  id: number;
  amount: string;
  term: number;
  monthlyRate: string | null;
  cetAnnual: string | null;
  installment: string | null;
  fullName: string | null;
  phone: string | null;
  email: string | null;
  cpf: string | null;
  birthDate: string | null;
  cep: string | null;
  street: string | null;
  number: string | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  incomeRange: string | null;
  occupation: string | null;
  loanPurpose: string | null;
  status: string;
  currentStep: number | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  createdAt: Date;
  updatedAt: Date;
  insuranceStatus: string | null;
  insuranceOptIn: number | null;
  insuranceTxid: string | null;
  stripeSessionId: string | null;
};

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: typeof CheckCircle }> = {
  draft: { label: "Rascunho", color: "bg-gray-100 text-gray-700", icon: FileText },
  submitted: { label: "Enviada", color: "bg-blue-100 text-blue-700", icon: Clock },
  analyzing: { label: "Analisando", color: "bg-yellow-100 text-yellow-700", icon: AlertTriangle },
  approved: { label: "Aprovada", color: "bg-green-100 text-green-700", icon: CheckCircle },
  rejected: { label: "Rejeitada", color: "bg-red-100 text-red-700", icon: XCircle },
};

const INSURANCE_CONFIG: Record<string, { label: string; color: string }> = {
  PAID: { label: "Pago", color: "bg-green-100 text-green-700" },
  PENDING: { label: "Pendente", color: "bg-yellow-100 text-yellow-700" },
  EXPIRED: { label: "Expirado", color: "bg-gray-100 text-gray-700" },
};

function formatCurrency(value: string | number | null | undefined): string {
  if (!value) return "R$ 0,00";
  const num = typeof value === "string" ? parseFloat(value) : value;
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDate(date: Date | string | null): string {
  if (!date) return "-";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function maskCPF(cpf: string | null): string {
  if (!cpf) return "-";
  // Show first 3 and last 2 digits
  const clean = cpf.replace(/\D/g, "");
  if (clean.length < 11) return cpf;
  return `${clean.slice(0, 3)}.***.**${clean.slice(9)}`;
}

// PIX Settings configuration
const PIX_SETTINGS_FIELDS = [
  { key: "pix_key", label: "Chave PIX", description: "CPF, CNPJ, email, telefone ou chave aleatória", placeholder: "ex: email@exemplo.com" },
  { key: "pix_key_type", label: "Tipo da Chave", description: "cpf, cnpj, email, telefone ou aleatoria", placeholder: "email" },
  { key: "pix_beneficiary_name", label: "Nome do Beneficiário", description: "Nome que aparece no comprovante PIX (sem acentos)", placeholder: "EMPRESTIMO SOCIAL" },
  { key: "pix_beneficiary_city", label: "Cidade do Beneficiário", description: "Cidade no payload PIX (sem acentos)", placeholder: "SAO PAULO" },
  { key: "insurance_percentage", label: "Percentual do Seguro (%)", description: "Percentual do valor do empréstimo cobrado como seguro (ex: 0.89 = 0,89%)", placeholder: "0.89" },
  { key: "insurance_amount", label: "Valor Fixo do Seguro (R$)", description: "Valor fixo de fallback caso o cálculo dinâmico não se aplique (o sistema usa o percentual acima)", placeholder: "19.00" },
  { key: "insurance_description", label: "Descrição do Seguro", description: "Descrição que aparece no payload PIX", placeholder: "Seguro Credito Social" },
];

function SettingsPanel({ settingsQuery, updateSettingsMutation }: {
  settingsQuery: ReturnType<typeof trpc.admin.getSettings.useQuery>;
  updateSettingsMutation: ReturnType<typeof trpc.admin.updateSettings.useMutation>;
}) {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize form values from query data
  const settings = settingsQuery.data;
  const settingsMap = useMemo((): Map<string, string> => {
    if (!settings || !Array.isArray(settings)) return new Map<string, string>();
    return new Map(settings.map((s: { settingKey: string; settingValue: string }) => [s.settingKey, s.settingValue] as [string, string]));
  }, [settings]);

  // Sync form values when settings load
  const [initialized, setInitialized] = useState(false);
  if (settings && Array.isArray(settings) && !initialized) {
    const initial: Record<string, string> = {};
    for (const field of PIX_SETTINGS_FIELDS) {
      initial[field.key] = settingsMap.get(field.key) ?? "";
    }
    setFormValues(initial);
    setInitialized(true);
  }

  const handleChange = (key: string, value: string) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    const updates = PIX_SETTINGS_FIELDS
      .filter(f => formValues[f.key] !== undefined && formValues[f.key] !== settingsMap.get(f.key))
      .map(f => ({ key: f.key, value: formValues[f.key] || "" }));

    if (updates.length === 0) {
      toast.info("Nenhuma alteração detectada.");
      return;
    }

    updateSettingsMutation.mutate(updates);
    setHasChanges(false);
  };

  const handleReset = () => {
    const initial: Record<string, string> = {};
    for (const field of PIX_SETTINGS_FIELDS) {
      initial[field.key] = settingsMap.get(field.key) ?? "";
    }
    setFormValues(initial);
    setHasChanges(false);
  };

  if (settingsQuery.isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* PIX Settings */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <QrCode className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Configurações PIX</h2>
                <p className="text-sm text-muted-foreground">Configure a chave PIX e dados do beneficiário para o pagamento do seguro</p>
              </div>
            </div>
            <div className="flex gap-2">
              {hasChanges && (
                <Button variant="outline" size="sm" onClick={handleReset}>
                  Descartar
                </Button>
              )}
              <Button
                size="sm"
                onClick={handleSave}
                disabled={!hasChanges || updateSettingsMutation.isPending}
              >
                {updateSettingsMutation.isPending ? (
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                ) : (
                  <Save className="mr-2 h-3 w-3" />
                )}
                Salvar Alterações
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PIX_SETTINGS_FIELDS.map((field) => (
              <div key={field.key} className="space-y-2">
                <Label htmlFor={field.key} className="text-sm font-medium">
                  {field.label}
                </Label>
                <Input
                  id={field.key}
                  value={formValues[field.key] || ""}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                />
                <p className="text-xs text-muted-foreground">{field.description}</p>
              </div>
            ))}
          </div>

          {hasChanges && (
            <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <AlertTriangle className="inline h-4 w-4 mr-1" />
                Você tem alterações não salvas. As mudanças serão aplicadas imediatamente após salvar.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Como funciona</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• A <strong>Chave PIX</strong> é usada para gerar o QR Code de pagamento do seguro.</li>
                <li>• O <strong>Nome do Beneficiário</strong> aparece no comprovante do pagador (use letras maiúsculas sem acentos).</li>
                <li>• A <strong>Cidade</strong> deve ser em maiúsculas sem acentos (ex: SAO PAULO).</li>
                <li>• O <strong>Percentual do Seguro</strong> define o valor dinâmico: 0.89 = 0,89% do valor solicitado (mín R$ 9,90, máx R$ 89,00).</li>
                <li>• O <strong>Valor Fixo</strong> é usado apenas como fallback caso o cálculo dinâmico não se aplique.</li>
                <li>• Alterações são aplicadas imediatamente para novos pagamentos. Pagamentos já gerados não são afetados.</li>
                <li>• O pagamento via <strong>Stripe (cartão)</strong> usa configurações separadas no painel do Stripe.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Admin() {
  const { user, loading, logout } = useAuth();
  const [, navigate] = useLocation();
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProposal, setSelectedProposal] = useState<ProposalRow | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "settings">("dashboard");

  // Debounce search
  const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (searchTimeout) clearTimeout(searchTimeout);
    const timeout = setTimeout(() => {
      setDebouncedSearch(value);
      setCurrentPage(1);
    }, 400);
    setSearchTimeout(timeout);
  };

  // tRPC queries
  const statsQuery = trpc.admin.stats.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  const proposalsQuery = trpc.admin.proposals.useQuery(
    { status: statusFilter, search: debouncedSearch, page: currentPage, pageSize: 15 },
    { enabled: !!user && user.role === "admin" }
  );

  const updateStatusMutation = trpc.admin.updateStatus.useMutation({
    onSuccess: (data) => {
      toast.success(`Proposta #${data.proposalId} atualizada para "${STATUS_CONFIG[data.status]?.label}"`);
      proposalsQuery.refetch();
      statsQuery.refetch();
    },
    onError: (err) => toast.error(err.message),
  });

  const confirmInsuranceMutation = trpc.admin.confirmInsurancePayment.useMutation({
    onSuccess: (data) => {
      toast.success(data.message);
      proposalsQuery.refetch();
      statsQuery.refetch();
      // Update selected proposal locally
      if (selectedProposal) {
        setSelectedProposal({ ...selectedProposal, insuranceStatus: "PAID" });
      }
    },
    onError: (err) => toast.error(err.message),
  });

  const exportCSVQuery = trpc.admin.exportCSV.useQuery(undefined, {
    enabled: false,
  });

  // Settings queries
  const settingsQuery = trpc.admin.getSettings.useQuery(undefined, {
    enabled: !!user && user.role === "admin" && activeTab === "settings",
  });

  const updateSettingsMutation = trpc.admin.updateSettings.useMutation({
    onSuccess: (data) => {
      toast.success(`${data.updated} configurações salvas com sucesso!`);
      settingsQuery.refetch();
    },
    onError: (err) => toast.error(err.message),
  });

  const handleExportCSV = async () => {
    const result = await exportCSVQuery.refetch();
    if (result.data?.csv) {
      const blob = new Blob([result.data.csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `propostas-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("CSV exportado com sucesso!");
    }
  };

  const handleStatusChange = (proposalId: number, newStatus: string) => {
    updateStatusMutation.mutate({
      proposalId,
      status: newStatus as "draft" | "submitted" | "analyzing" | "approved" | "rejected",
    });
  };

  const openDetail = (proposal: ProposalRow) => {
    setSelectedProposal(proposal);
    setDetailOpen(true);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center space-y-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Acesso Restrito</h1>
            <p className="text-muted-foreground">
              Faça login para acessar o painel administrativo.
            </p>
            <Button onClick={() => { window.location.href = getLoginUrl(); }} size="lg" className="w-full">
              Entrar
            </Button>
            <Button variant="ghost" onClick={() => navigate("/")} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao site
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not admin
  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center space-y-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-destructive" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Acesso Negado</h1>
            <p className="text-muted-foreground">
              Você não tem permissão para acessar esta área. Apenas administradores podem gerenciar propostas.
            </p>
            <Button variant="ghost" onClick={() => navigate("/")} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao site
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stats = statsQuery.data;
  const proposalsData = proposalsQuery.data;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top bar */}
      <header className="bg-background border-b sticky top-0 z-40">
        <div className="container flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <h1 className="font-bold text-foreground">Painel Admin</h1>
            </div>
            <div className="flex ml-4 gap-1">
              <Button
                variant={activeTab === "dashboard" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("dashboard")}
              >
                <FileText className="mr-1.5 h-3.5 w-3.5" /> Propostas
              </Button>
              <Button
                variant={activeTab === "settings" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="mr-1.5 h-3.5 w-3.5" /> Configurações
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user.name || user.email}
            </span>
            <Badge variant="secondary" className="text-xs">Admin</Badge>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6 space-y-6">
        {activeTab === "settings" ? (
          <SettingsPanel
            settingsQuery={settingsQuery}
            updateSettingsMutation={updateSettingsMutation}
          />
        ) : (
        <>
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Total</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {stats?.totalProposals ?? <Loader2 className="h-5 w-5 animate-spin" />}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-muted-foreground">Enviadas</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {stats?.submittedProposals ?? "-"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span className="text-xs text-muted-foreground">Analisando</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {stats?.analyzingProposals ?? "-"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-xs text-muted-foreground">Aprovadas</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {stats?.approvedProposals ?? "-"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Valor Total</span>
              </div>
              <p className="text-lg font-bold text-foreground">
                {stats ? formatCurrency(stats.totalRequestedAmount) : "-"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <span className="text-xs text-muted-foreground">Seguros Pagos</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {stats?.totalInsurancePaid ?? "-"}
              </p>
              {stats && stats.insuranceRevenue > 0 && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {formatCurrency(stats.insuranceRevenue)}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Filters & Actions */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full sm:w-auto">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nome, CPF, email..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="draft">Rascunho</SelectItem>
                    <SelectItem value="submitted">Enviada</SelectItem>
                    <SelectItem value="analyzing">Analisando</SelectItem>
                    <SelectItem value="approved">Aprovada</SelectItem>
                    <SelectItem value="rejected">Rejeitada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => { proposalsQuery.refetch(); statsQuery.refetch(); }}
                >
                  <RefreshCw className="mr-2 h-3 w-3" /> Atualizar
                </Button>
                <Button variant="outline" size="sm" onClick={handleExportCSV}>
                  <Download className="mr-2 h-3 w-3" /> Exportar CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proposals Table */}
        <Card>
          <CardContent className="p-0">
            {proposalsQuery.isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : !proposalsData?.proposals.length ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <FileText className="h-12 w-12 mb-4 opacity-30" />
                <p className="text-lg font-medium">Nenhuma proposta encontrada</p>
                <p className="text-sm">Ajuste os filtros ou aguarde novas propostas.</p>
              </div>
            ) : (
              <>
                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-3 font-medium text-muted-foreground">#</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Nome</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">CPF</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Valor</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Prazo</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Seguro</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                        <th className="text-left p-3 font-medium text-muted-foreground">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {proposalsData.proposals.map((p) => {
                        const statusCfg = STATUS_CONFIG[p.status] || STATUS_CONFIG.draft;
                        const insuranceCfg = p.insuranceStatus ? INSURANCE_CONFIG[p.insuranceStatus] : null;
                        return (
                          <tr key={p.id} className="border-b hover:bg-muted/30 transition-colors">
                            <td className="p-3 font-mono text-xs text-muted-foreground">{p.id}</td>
                            <td className="p-3">
                              <div>
                                <p className="font-medium text-foreground truncate max-w-[180px]">
                                  {p.fullName || "—"}
                                </p>
                                <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                                  {p.email || "—"}
                                </p>
                              </div>
                            </td>
                            <td className="p-3 font-mono text-xs">{maskCPF(p.cpf)}</td>
                            <td className="p-3 font-semibold">{formatCurrency(p.amount)}</td>
                            <td className="p-3">{p.term}x</td>
                            <td className="p-3">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusCfg.color}`}>
                                {statusCfg.label}
                              </span>
                            </td>
                            <td className="p-3">
                              {insuranceCfg ? (
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${insuranceCfg.color}`}>
                                  <Shield className="h-3 w-3" />
                                  {insuranceCfg.label}
                                </span>
                              ) : (
                                <span className="text-xs text-muted-foreground">—</span>
                              )}
                            </td>
                            <td className="p-3 text-xs text-muted-foreground whitespace-nowrap">
                              {formatDate(p.createdAt)}
                            </td>
                            <td className="p-3">
                              <div className="flex gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openDetail(p)}>
                                  <Eye className="h-3.5 w-3.5" />
                                </Button>
                                {p.status === "submitted" && (
                                  <>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-yellow-600 hover:text-yellow-700"
                                      onClick={() => handleStatusChange(p.id, "analyzing")}
                                      disabled={updateStatusMutation.isPending}
                                    >
                                      <AlertTriangle className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-green-600 hover:text-green-700"
                                      onClick={() => handleStatusChange(p.id, "approved")}
                                      disabled={updateStatusMutation.isPending}
                                    >
                                      <CheckCircle className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-red-600 hover:text-red-700"
                                      onClick={() => handleStatusChange(p.id, "rejected")}
                                      disabled={updateStatusMutation.isPending}
                                    >
                                      <XCircle className="h-3.5 w-3.5" />
                                    </Button>
                                  </>
                                )}
                                {p.status === "analyzing" && (
                                  <>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-green-600 hover:text-green-700"
                                      onClick={() => handleStatusChange(p.id, "approved")}
                                      disabled={updateStatusMutation.isPending}
                                    >
                                      <CheckCircle className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-red-600 hover:text-red-700"
                                      onClick={() => handleStatusChange(p.id, "rejected")}
                                      disabled={updateStatusMutation.isPending}
                                    >
                                      <XCircle className="h-3.5 w-3.5" />
                                    </Button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden divide-y">
                  {proposalsData.proposals.map((p) => {
                    const statusCfg = STATUS_CONFIG[p.status] || STATUS_CONFIG.draft;
                    const insuranceCfg = p.insuranceStatus ? INSURANCE_CONFIG[p.insuranceStatus] : null;
                    return (
                      <div key={p.id} className="p-4 space-y-3" onClick={() => openDetail(p)}>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-foreground">{p.fullName || "Sem nome"}</p>
                            <p className="text-xs text-muted-foreground">{maskCPF(p.cpf)} · #{p.id}</p>
                          </div>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusCfg.color}`}>
                            {statusCfg.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="font-semibold">{formatCurrency(p.amount)}</span>
                          <span className="text-muted-foreground">{p.term}x</span>
                          {insuranceCfg && (
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${insuranceCfg.color}`}>
                              <Shield className="h-3 w-3" />
                              {insuranceCfg.label}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{formatDate(p.createdAt)}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination */}
                {proposalsData.totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Mostrando {((currentPage - 1) * (proposalsData.pageSize)) + 1}–{Math.min(currentPage * proposalsData.pageSize, proposalsData.total)} de {proposalsData.total}
                    </p>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        disabled={currentPage <= 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center px-3 text-sm text-muted-foreground">
                        {currentPage} / {proposalsData.totalPages}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        disabled={currentPage >= proposalsData.totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
        </>
        )}
      </main>

      {/* Detail Dialog */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProposal && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Proposta #{selectedProposal.id}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Status + Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_CONFIG[selectedProposal.status]?.color}`}>
                      {STATUS_CONFIG[selectedProposal.status]?.label}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {(selectedProposal.status === "submitted" || selectedProposal.status === "analyzing") && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-600 border-green-200 hover:bg-green-50"
                          onClick={() => { handleStatusChange(selectedProposal.id, "approved"); setDetailOpen(false); }}
                          disabled={updateStatusMutation.isPending}
                        >
                          <CheckCircle className="mr-1 h-3 w-3" /> Aprovar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => { handleStatusChange(selectedProposal.id, "rejected"); setDetailOpen(false); }}
                          disabled={updateStatusMutation.isPending}
                        >
                          <XCircle className="mr-1 h-3 w-3" /> Rejeitar
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Simulation */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" /> Simulação
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Valor</p>
                      <p className="font-semibold">{formatCurrency(selectedProposal.amount)}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Prazo</p>
                      <p className="font-semibold">{selectedProposal.term}x</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Parcela</p>
                      <p className="font-semibold">{formatCurrency(selectedProposal.installment)}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Taxa/mês</p>
                      <p className="font-semibold">{selectedProposal.monthlyRate ? `${parseFloat(selectedProposal.monthlyRate).toFixed(2)}%` : "-"}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Contact */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" /> Dados Pessoais
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Nome completo</p>
                      <p className="font-medium">{selectedProposal.fullName || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">CPF</p>
                      <p className="font-medium font-mono">{selectedProposal.cpf || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium">{selectedProposal.email || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Telefone</p>
                      <p className="font-medium">{selectedProposal.phone || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Data de nascimento</p>
                      <p className="font-medium">{selectedProposal.birthDate || "—"}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Address */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Endereço</h3>
                  <p className="text-sm">
                    {selectedProposal.street ? (
                      <>
                        {selectedProposal.street}, {selectedProposal.number}
                        {selectedProposal.complement ? ` - ${selectedProposal.complement}` : ""}
                        <br />
                        {selectedProposal.neighborhood} — {selectedProposal.city}/{selectedProposal.state}
                        <br />
                        CEP: {selectedProposal.cep}
                      </>
                    ) : (
                      <span className="text-muted-foreground">Não informado</span>
                    )}
                  </p>
                </div>

                <Separator />

                {/* Financial Profile */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" /> Perfil Financeiro
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Faixa de renda</p>
                      <p className="font-medium">{selectedProposal.incomeRange || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Ocupação</p>
                      <p className="font-medium">{selectedProposal.occupation || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Finalidade</p>
                      <p className="font-medium">{selectedProposal.loanPurpose || "—"}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Insurance */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" /> Seguro
                  </h3>
                  {selectedProposal.insuranceStatus ? (
                    <div className="space-y-3">
                      <div className="grid sm:grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground">Status</p>
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${INSURANCE_CONFIG[selectedProposal.insuranceStatus]?.color || "bg-gray-100 text-gray-700"}`}>
                            {INSURANCE_CONFIG[selectedProposal.insuranceStatus]?.label || selectedProposal.insuranceStatus}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">TXID PIX</p>
                          <p className="font-medium font-mono text-xs">{selectedProposal.insuranceTxid || "—"}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Stripe Session</p>
                          <p className="font-medium font-mono text-xs truncate">{selectedProposal.stripeSessionId || "—"}</p>
                        </div>
                      </div>
                      {selectedProposal.insuranceStatus === "PENDING" && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 space-y-2">
                          <p className="text-sm text-yellow-800 font-medium">Pagamento PIX pendente</p>
                          <p className="text-xs text-yellow-700">Confirme manualmente após verificar o recebimento no app do banco.</p>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => confirmInsuranceMutation.mutate({ proposalId: selectedProposal.id })}
                            disabled={confirmInsuranceMutation.isPending}
                          >
                            {confirmInsuranceMutation.isPending ? (
                              <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                            ) : (
                              <ShieldCheck className="mr-2 h-3 w-3" />
                            )}
                            Confirmar Pagamento PIX Recebido
                          </Button>
                        </div>
                      )}
                      {selectedProposal.insuranceStatus === "PAID" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-700 font-medium">Pagamento confirmado</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Seguro não contratado</p>
                  )}
                </div>

                <Separator />

                {/* UTM / Meta */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Rastreamento</h3>
                  <div className="grid sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">UTM Source</p>
                      <p className="font-medium">{selectedProposal.utmSource || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">UTM Medium</p>
                      <p className="font-medium">{selectedProposal.utmMedium || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">UTM Campaign</p>
                      <p className="font-medium">{selectedProposal.utmCampaign || "—"}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-muted-foreground pt-2">
                  <span>Criada: {formatDate(selectedProposal.createdAt)}</span>
                  <span>Atualizada: {formatDate(selectedProposal.updatedAt)}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
