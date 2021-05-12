import { GalleryItem } from '../types'
import { deleteImage, getImages, uploadEvent, uploadImage } from '../utils/api-utils'

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

export const SET_IMAGE = 'SET_IMAGE';
export const setImage = (image: GalleryItem) => ({
  type: SET_IMAGE,
  payload: image
});

export const DELETE_IMAGE = 'DELETE_IMAGE';


export const fetchImages = () => (dispatch: any) => {
  getImages()
    .then(images => {
      dispatch(setImages(images));
    })

    .finally(() => dispatch(setLoading(false)));
};

export const addImage = (imageString: ArrayBuffer, metadata: string) => 
  (dispatch: any) => {
    uploadImage(imageString, metadata)
      .then(image => {
        dispatch({
          type: SET_IMAGE,
          payload: image
      });
    }) 
}

export const addEvent = (imageString: ArrayBuffer, metadata: string) => 
  (dispatch: any) => {
    uploadEvent(imageString, metadata)
      .then(image => {
        dispatch({
          type: SET_IMAGE,
          payload: image
      });
    }) 
}

export const removeImage = (publicId: string) => 
  (dispatch: any) => {
    dispatch(setLoading(true))
    deleteImage(publicId)
      .then(({ publicId })  => {
        dispatch({
          type: DELETE_IMAGE,
          payload: publicId
        });
      })

      .finally(() => dispatch(setLoading(false)));
  }
