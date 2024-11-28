import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TGameState, TSetPointerPayload, TSetWordPayload} from "@src/entities/game/model";

const initialState: TGameState = {
    words: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
    },
    pointer: 1
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    selectors: {
        getPointer: (state) => state.pointer,
        getWordById: (state, wordId: keyof TGameState['words']) => state.words[wordId]
    },
    reducers: {
        setWordById: (state, {payload}: PayloadAction<TSetWordPayload>) => {
            state.words[payload.wordId] = payload.value
        },
        setPointer: (state, {payload}: PayloadAction<TSetPointerPayload>) => {
            state.pointer = payload
        },
        pushPointedChar: (state, {payload}: PayloadAction<string>) => {
            if (state.words[state.pointer].length < 5) {
                state.words[state.pointer] += payload
            }
        },
        popPointedChar: (state) => {
            const currentWord = state.words[state.pointer]
            state.words[state.pointer] = currentWord.slice(0, currentWord.length - 1)
        }
    }
})

export const {
    setWordById,
    setPointer,
    pushPointedChar,
    popPointedChar
} = gameSlice.actions

export const {
    getPointer,
    getWordById
} = gameSlice.getSelectors()
