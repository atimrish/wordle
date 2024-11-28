import {configureStore} from "@reduxjs/toolkit";
import {gameSlice} from "@src/entities/game/model";

export const mainStore = configureStore({
    reducer: {
        [gameSlice.name]: gameSlice.reducer
    }
})

export type TMainState = ReturnType<typeof mainStore.getState>;