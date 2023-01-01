import {
    configureStore
} from '@reduxjs/toolkit';
import counterReducer from "./counterReducer";
import duaReducer from "./duaReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dua: duaReducer
    }
});
export default store;