import { type Actor, requireOwner } from "./permissions";

export type ActivityRecord = {
  id: string;
  ownerId: string;
  title: string;
};

export function listVisibleActivities(actor: Actor, records: ActivityRecord[]) {
  void actor;
  return records;
}

export function renameActivity(actor: Actor, record: ActivityRecord, title: string) {
  requireOwner(actor, record.ownerId);
  return { ...record, title };
}
