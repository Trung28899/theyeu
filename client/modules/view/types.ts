import { StaticImageData } from "next/image";

interface ImageType {
  image: string | StaticImageData;
}

interface ImageData extends ImageType {
  id: string;
  date: string;
  title: string;
  description: string;
}

export type { ImageType, ImageData };
