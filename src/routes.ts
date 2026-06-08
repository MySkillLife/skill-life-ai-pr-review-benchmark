export type RouteConfig = {
  path: string;
  requiresAuth: boolean;
  title: string;
};

export const routes: RouteConfig[] = [
  { path: "/dashboard", requiresAuth: true, title: "Dashboard" },
  { path: "/settings/privacy", requiresAuth: false, title: "Privacy" },
];

export function resolveRoute(path: string) {
  return routes.find((route) => route.path === path) ?? null;
}
