import { GalleryItem } from "../types";

export const arrangeDate = (date: string): string => {
  const dateArr = date.split('-');
  return [dateArr[1], '-', dateArr[2], '-', dateArr[0]].join('');
}

export const reArrangeDate = (date: string): string => {
  const dateArr = date.split('/');
  const year = dateArr[2];
  const day = (dateArr[1].length === 2) 
    ? dateArr[1] 
    : '0' + dateArr[1];
  const month = (dateArr[0].length === 2)
    ? dateArr[0]
    : '0' + dateArr[0];
  return [year, '-', month, '-', day].join('');
}

export const convertPublicId = (publicId: string): string => {
  return publicId.replaceAll('/', '*');
}

export const restorePublicId = (publicId: string): string => {
  return publicId.replaceAll('*', '/');
}

export const findByPublicId = (
  images: GalleryItem[], publicId: string): GalleryItem | undefined => {
    return images.find(image => image.publicId === publicId);
}
