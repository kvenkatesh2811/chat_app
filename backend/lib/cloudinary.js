import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Export the configured Cloudinary instance
export default cloudinary;
/* import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.CLOUDINARY_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

// if (!cloudName || !apiKey || !apiSecret) {
//   throw new Error(
//     "Missing Cloudinary env vars: CLOUDINARY_NAME, CLOUDINARY_API_KEY, or CLOUDINARY_API_SECRET"
//   );
// }

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
}); */

//export default cloudinary;