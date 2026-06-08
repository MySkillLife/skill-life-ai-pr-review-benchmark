export type UserProfile = {
  id: string;
  name: string;
};

export async function loadUserProfile(userId: string): Promise<UserProfile> {
  return { id: userId, name: "Real User" };
}
