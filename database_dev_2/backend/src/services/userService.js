/**
 * Business logic layer for Users
 * 
 * Purpose: Handles user account management, authentication, and permissions.
 * 
 * Methods to implement:
 * - listUsers(filters) - Get all users with pagination
 * - createUser(data) - Create new user account with hashed password
 * - getUser(id) - Get user details
 * - updateUser(id, data) - Update user profile or role
 * - deleteUser(id) - Deactivate or delete user
 * - changePassword(userId, oldPassword, newPassword) - Change user password
 * - validateCredentials(email, password) - Check email/password for login
 * 
 * Business rules:
 * - Email must be unique (case-insensitive)
 * - Password must meet minimum requirements (8+ chars, mix of upper/lower/numbers)
 * - Hash passwords using bcrypt before storage
 * - Cannot create multiple users with same email
 * - Role assignment only by ADMIN users
 */
export const userService = {
  async listUsers(filters) {
    // TODO: Call userRepository.findMany(filters)
    // Exclude password hashes from response
  },

  async createUser(data) {
    // TODO: Validate business rules (unique email, password strength)
    // Hash password using bcrypt: const hashedPassword = await bcrypt.hash(data.password, 10)
    // Call userRepository.create({...data, password: hashedPassword})
  },

  async getUser(id) {
    // TODO: Call userRepository.findById(id)
    // Exclude password from response
  },

  async updateUser(id, data) {
    // TODO: Validate and update user
    // Only ADMIN can change role
    // Call userRepository.update(id, data)
  },

  async deleteUser(id) {
    // TODO: Mark user as inactive or hard delete
    // Call userRepository.delete(id)
  },

  async validateCredentials(email, password) {
    // TODO: Find user by email
    // Compare passwords using bcrypt: const valid = await bcrypt.compare(password, user.password)
    // Return user if valid, throw 401 if not
  }
};
