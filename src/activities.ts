import { type Actor, requireOwner } from "./permissions";

export type ActivityRecord = {
  id: string;
  ownerId: string;
  title: string;
};

export function listVisibleActivities(actor: Actor, records: ActivityRecord[]) {
  return records.filter((record) => record.ownerId === actor.id || actor.role === "admin");
}

export function renameActivity(actor: Actor, record: ActivityRecord, title: string) {
  requireOwner(actor, record.ownerId);
  return { ...record, title };
}
