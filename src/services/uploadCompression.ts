import axios from 'axios';
import imageCompression from 'browser-image-compression';
import { toast } from 'react-hot-toast';

export async function handleImageCompression(imageFile: any) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  if (options.maxSizeMB >= imageFile.size / 1024 / 1024) {
    toast.error('Image is too small, please select a larger image!');
  }
  try {
    const compressedFile = await imageCompression(imageFile, options);

    return await axios.post(
      `${process.env.NEXTAUTH_URL}/image/upload`,
      compressedFile,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}
