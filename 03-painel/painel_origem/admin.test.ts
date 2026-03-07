import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createAnonContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("admin routes - access control", () => {
  it("rejects unauthenticated users from admin.stats", async () => {
    const ctx = createAnonContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.stats()).rejects.toThrow();
  });

  it("rejects non-admin users from admin.stats", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.stats()).rejects.toThrow();
  });

  it("rejects unauthenticated users from admin.proposals", async () => {
    const ctx = createAnonContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.proposals({ status: "all", search: "", page: 1, pageSize: 10 })
    ).rejects.toThrow();
  });

  it("rejects non-admin users from admin.proposals", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.proposals({ status: "all", search: "", page: 1, pageSize: 10 })
    ).rejects.toThrow();
  });

  it("rejects unauthenticated users from admin.updateStatus", async () => {
    const ctx = createAnonContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.updateStatus({ proposalId: 1, status: "approved" })
    ).rejects.toThrow();
  });

  it("rejects non-admin users from admin.updateStatus", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.updateStatus({ proposalId: 1, status: "approved" })
    ).rejects.toThrow();
  });

  it("rejects unauthenticated users from admin.exportCSV", async () => {
    const ctx = createAnonContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.exportCSV()).rejects.toThrow();
  });

  it("rejects non-admin users from admin.exportCSV", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.exportCSV()).rejects.toThrow();
  });
});
