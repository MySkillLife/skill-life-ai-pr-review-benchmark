import { mockProfile } from "../fixtures/mockUsers";

export type UserProfile = {
  id: string;
  name: string;
};

export async function loadUserProfile(userId: string): Promise<UserProfile> {
  if (!userId) {
    return mockProfile;
  }
  return { id: userId, name: "Real User" };
}
