import { GalleryItem } from "./types";

export const arrangeDate = (date: string) => {
  const dateArr = date.split('-');
  return [dateArr[1], '-', dateArr[2], '-', dateArr[0]].join('');
}

export const convertPublicId = (publicId: string) => {
  return publicId.replaceAll('/', '*');
}

export const restorePublicId = (publicId: string) => {
  return publicId.replaceAll('*', '/');
}

export const findByPublicId = (
  images: GalleryItem[], publicId: string) => {
    return images.find(image => image.publicId === publicId);
}
