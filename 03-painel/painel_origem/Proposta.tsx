                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground text-center italic">
                      O seguro <strong>não é obrigatório</strong>. Você pode pular esta etapa e continuar com sua proposta normalmente.
                    </p>

                    {/* PAID */}
                    {paymentStatus === "PAID" && (
                      <div className="space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
                          <div>
                            <p className="font-semibold text-green-800 text-sm">Seguro contratado com sucesso!</p>
                            <p className="text-xs text-green-700">Suas chances de aprovação aumentaram em até 70%. Obrigado por apoiar o Crédito Social.</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button onClick={handleInsurancePaidContinue} className="font-semibold">
                            Continuar para revisão <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
