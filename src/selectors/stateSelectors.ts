import { State } from "../types";

export const selectImages = (state: State) => state.images;
export const selectLoading = (state: State) => state.loading;
