import { GalleryItem } from '../types'
import { deleteImage, getImages } from '../utils/api-utils'

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

export const DELETE_IMAGE = 'DELETE_IMAGE';


export const fetchImages = () => (dispatch: any) => {
  getImages()
    .then(images => {
      dispatch(setImages(images));
    })

    .finally(() => dispatch(setLoading(false)));
}

export const removeImage = (publicId: string) => 
  (dispatch: any) => {
    dispatch(setLoading(true))
    deleteImage(publicId)
      .then((image: GalleryItem) => {
        dispatch({
          type: DELETE_IMAGE,
          payload: image.publicId
        });
      })

      .finally(() => dispatch(setLoading(false)));
  }
