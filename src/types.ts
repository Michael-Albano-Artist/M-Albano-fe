export interface Metadata {
  title: string;
  price: string;
  medium: string;
  dimensions: string;
  forSale: string;
}

export interface GalleryItem {
  metadata: Metadata,
  publicId: string

}
