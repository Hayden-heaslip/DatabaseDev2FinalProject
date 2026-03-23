/** Shared TypeScript types for user/item/etc. */

export type RoleName = "ADMIN" | "MANAGER" | "EMPLOYEE";

export type AppUser = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role: RoleName;
};

export type Item = {
  itemId: number;
  title: string;
  condition: string;
  category: "BOOK" | "MAP" | "MAGAZINE" | "OTHER";
};
