import bcrypt from 'bcryptjs';

/**
 * Hash a password using bcrypt
 * @param password - Plain text password
 * @param saltRounds - Number of salt rounds (default: 10)
 * @returns Promise<string> - Hashed password
 */
export const hashPassword = async (password: string, saltRounds: number = 10): Promise<string> => {
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Compare a plain text password with a hashed password
 * @param password - Plain text password
 * @param hashedPassword - Hashed password from database
 * @returns Promise<boolean> - True if passwords match
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

/**
 * Check if a password is already hashed
 * @param password - Password string to check
 * @returns boolean - True if password appears to be hashed
 */
export const isPasswordHashed = (password: string): boolean => {
  return password.startsWith('$2a$') || password.startsWith('$2b$') || password.startsWith('$2y$');
};
