import { SET_IMAGES, SET_LOADING } from "../actions/imageActions";

const initialState = {
  loading: true,
  images: []
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

      default:
        return state;
    }


}
