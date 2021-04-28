import { GalleryItem } from '../types'
import { getImages } from '../api-utils'

export const SET_IMAGES = 'SET_IMAGES';
export const setImages = (images: GalleryItem[]) => ({
  type: SET_IMAGES,
  payload: images
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (loading: boolean)=> ({
  type: SET_LOADING,
  payload: loading
});


export const fetchImages = () => (dispatch: any) => {
  getImages()
    .then(images => {
      dispatch(setImages(images));
    })

    .finally(() => dispatch(setLoading(false)));
}
