// Dummy auth users for early project phase (no DB dependency).
const DUMMY_USERS = [
  {
    userId: 1,
    email: "connor@britannicus.local",
    password: "Connor123!",
    firstName: "Connor",
    lastName: "Whyte",
    role: "admin",
    isActive: true,
  },
  {
    userId: 2,
    email: "luciia@britannicus.local",
    password: "Luciia123!",
    firstName: "Luciia",
    lastName: "Whyte",
    role: "manager",
    isActive: true,
  },
  {
    userId: 3,
    email: "derek@britannicus.local",
    password: "Derek123!",
    firstName: "Derek",
    lastName: "Arthurs",
    role: "employee",
    isActive: true,
  },
];

function toPublicUser(user) {
  return {
    userId: user.userId,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };
}

export async function loginUser(email, password) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const rawPassword = String(password || "");

  const user = DUMMY_USERS.find((entry) => entry.email === normalizedEmail);

  if (!user || !user.isActive || user.password !== rawPassword) {
    throw new Error("Invalid email or password");
  }

  return toPublicUser(user);
}

export async function getUserById(userId) {
  const parsedId = Number(userId);
  const user = DUMMY_USERS.find((entry) => entry.userId === parsedId && entry.isActive);
  return user ? toPublicUser(user) : null;
}