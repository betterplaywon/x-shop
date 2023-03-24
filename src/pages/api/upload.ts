import axios from "axios";

export const uploadImage = async file => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || "");
  return await axios
    .post(process.env.NEXT_PUBLIC_CLOUDINARY_URL || "", data)
    .then(res => res.data.url);
};
