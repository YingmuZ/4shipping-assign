import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { vesselsApi } from "../services/vesselsApi";

export default configureStore({
    reducer: {
        [vesselsApi.reducerPath]: vesselsApi.reducer,

    },


    middleware:
        (getdefaultMiddleware) =>
            getdefaultMiddleware()
            .concat([
                     vesselsApi.middleware, 
                   ])
    
});


