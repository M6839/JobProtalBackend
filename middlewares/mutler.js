import multer from "multer";

const storage = multer.memoryStorage();
export const uploadProfilePhoto = multer({ storage }).single("profilePhoto");
export const uploadResume = multer({ storage }).single("resume");
export const uploadLogo = multer({ storage }).single("logo");