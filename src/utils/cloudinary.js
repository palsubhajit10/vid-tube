import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config({
  path: "./config/.env",
});

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

// Upload file on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded on cloudinary File Src:-", uploadResult.url);
    //Once the file is uploaded we would like to remove it from server
    fs.unlinkSync(localFilePath);
    return uploadResult;
  } catch (error) {
    console.log("Cloudinary file uploading error ", error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

// delete file from cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    const deleteResult = await cloudinary.uploader.destroy(publicId);
    console.log("File deleted from cloudinary", deleteResult);

    return deleteResult;
  } catch (error) {
    console.log("Cloudinary file deleting error", error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
