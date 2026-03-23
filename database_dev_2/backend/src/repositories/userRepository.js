/**
 * Data Access Layer for Users
 * 
 * Purpose: Direct database queries for user accounts using Prisma ORM.
 * Password storage/retrieval goes through here (with bcrypt hashing).
 * 
 * Methods to implement:
 * - findMany(filters) - Get paginated users with role/status filtering
 * - findById(id) - Get single user (exclude password)
 * - findByEmail(email) - Lookup user by email (include password for login)
 * - create(data) - Create new user (password should be pre-hashed)
 * - update(id, data) - Update user (role, name, status)
 * - delete(id) - Deactivate/delete user
 * - countByRole(role) - Count users with specific role
 */
export const userRepository = {
  async findMany(filters = {}) {
    // TODO: Use prisma.user.findMany() with pagination, status, role filtering
    // Always exclude password from results
  },

  async findById(id) {
    // TODO: Use prisma.user.findUnique({ where: { id } })
    // Exclude password from result
  },

  async findByEmail(email) {
    // TODO: Use prisma.user.findFirst({ where: { email } })
    // include password for authentication comparison
  },

  async create(data) {
    // TODO: Use prisma.user.create({ data })
    // data should already have hashed password
  },

  async update(id, data) {
    // TODO: Use prisma.user.update({ where: { id }, data })
  },

  async delete(id) {
    // TODO: Use prisma.user.delete({ where: { id } })
  },

  async countByRole(role) {
    // TODO: Use prisma.user.count({ where: { role } })
    // Useful for checking if ADMIN users exist
  }
};

