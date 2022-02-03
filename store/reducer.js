import { createSlice } from "@reduxjs/toolkit";

const reducerSlice = createSlice({
    name: 'rootReducer',
    initialState: {images:[], loading: true, showMessage: false},
    reducers: {
        addImages(state, action){
            state.images = action.payload;
        },
        addLoading(state, action){
            state.loading = action.payload;
        },
        addQuery(state, action){
            state.query = action.payload
        },
        addModalContent(state, action){
            state.modalContent = action.payload
        },
        modalOn(state, action){
            state.modalOn = action.payload
        },
        isShowMessageOn(state, action){
            state.showMessage = action.payload;
        }
    }
})

export const {actions, reducer} = reducerSlice;