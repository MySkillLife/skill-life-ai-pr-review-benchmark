export type Role = "admin" | "member" | "guest";

export type Actor = {
  id: string;
  role: Role;
};

export function requireAdmin(actor: Actor) {
  if (actor.role !== "admin") {
    throw new Error("admin-required");
  }
}

export function requireOwner(actor: Actor, ownerId: string) {
  if (actor.id !== ownerId && actor.role !== "admin") {
    throw new Error("owner-required");
  }
}
