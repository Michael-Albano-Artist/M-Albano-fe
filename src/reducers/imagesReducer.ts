import { SET_IMAGES, SET_LOADING, DELETE_IMAGE, SET_IMAGE } from "../actions/imageActions";
import { GalleryItem } from '../types';

const initialState = {
  loading: true,
  images: [],
}

export default function reducer(
  state = initialState, action) {
    switch(action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      
      case SET_IMAGES:
        return {
          ...state,
          images: action.payload
        };

      case SET_IMAGE:
        return {
          ...state,
          images: [...state.images, action.payload]
        }

      case DELETE_IMAGE: 
        return {
          ...state,
          images: state.images.filter((image: GalleryItem) => 
            image.publicId !== action.payload)
        }
      

      default:
        return state;
    }


}
