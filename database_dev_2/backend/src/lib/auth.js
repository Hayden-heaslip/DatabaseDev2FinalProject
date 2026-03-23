/**
 * Authentication helpers
 * 
 * Purpose: Centralized authentication logic for token verification and user extraction.
 * Handles JWT token parsing and validation.
 * 
 * Methods to implement:
 * - verifyToken(token) - Verify JWT token signature and expiration
 * - decodeToken(token) - Parse JWT payload without verification (for development)
 * - generateToken(payload, expiresIn) - Generate JWT token for login
 * - getCurrentUser(request) - Extract and verify user from request headers
 * 
 * Implementation notes:
 * - Use 'jsonwebtoken' package for JWT operations: import jwt from 'jsonwebtoken'
 * - Store JWT_SECRET in .env file (never commit secrets)
 * - Token should contain: { userId, email, role, iat, exp }
 * - Default expiration: 24 hours
 * - Extract token from 'Authorization: Bearer <token>' header
 */

// TODO: Import JWT library
// import jwt from 'jsonwebtoken';
// const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export function verifyToken(token) {
  // TODO: Verify JWT signature and expiration
  // Use jwt.verify(token, JWT_SECRET)
  // Throw error if invalid or expired
  // Return decoded payload { userId, email, role }
  return null;
}

export function generateToken(payload, expiresIn = '24h') {
  // TODO: Generate new JWT token
  // Use jwt.sign(payload, JWT_SECRET, { expiresIn })
  // Return token string
  return null;
}

export function getCurrentUser(request) {
  // TODO: Extract Authorization header
  // Parse 'Bearer <token>' format
  // Verify token using verifyToken()
  // Return user object with id, email, role
  // Throw 401 if no token or invalid
  return null;
}

