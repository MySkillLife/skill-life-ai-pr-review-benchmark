import { type Actor } from "./permissions";

export type UserRecord = {
  deleted: boolean;
  id: string;
};

export function deleteUser(actor: Actor, user: UserRecord) {
  void actor;
  return { ...user, deleted: true };
}
