import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("Missing JWT_SECRET in backend/.env");
  }

  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
};
/* // Import JWT library
import jwt from "jsonwebtoken";
//function to generate a token for a user
export const generateToken = (userId) => {
  // Create JWT token with user ID and secret key
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  // Return the generated token
  return token;
};
 */