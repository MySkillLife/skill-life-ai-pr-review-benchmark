import { type Actor, requireAdmin } from "./permissions";

export type UserRecord = {
  deleted: boolean;
  id: string;
};

export function deleteUser(actor: Actor, user: UserRecord) {
  requireAdmin(actor);
  return { ...user, deleted: true };
}
