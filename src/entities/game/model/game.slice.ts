import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TChar, TGameState, TSetPointerPayload, TSetWordPayload, TWord} from "@src/entities/game/model";
import {getRandomWord, getWords} from "@src/entities/game/lib";

const initialState: TGameState = {
    words: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
    },
    wordMatches: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
    },
    usedChars: {},
    pointer: 1,
    currentWord: 'blank_word',
    gameOver: false,
    gameWin: false,
    unknownIndex: undefined
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    selectors: {
        getPointer: (state) => state.pointer,
        getWordById: (state, wordId: keyof TGameState['words']) => state.words[wordId],
        getCurrentWord: (state) => state.currentWord,
        getMatchById: (state, wordId: keyof TGameState['words']) => state.wordMatches[wordId],
        getUsedChars: (state) => state.usedChars,
        getGameOver: (state) => state.gameOver,
        getGameWin: (state) => state.gameWin,
        getUnknownIndex: (state) => state.unknownIndex,
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
        },
        enterPointedWord: (state) => {
            if (state.words[state.pointer].length === 5) {
                if (state.pointer < 6) {
                    if (state.words[state.pointer] === state.currentWord) {
                        state.wordMatches[state.pointer] = new Array(5).fill('matched')
                        state.gameWin = true

                    } else if (getWords().includes(state.words[state.pointer].toLowerCase())) {
                        state.words[state.pointer]
                            .split('')
                            .forEach((char, index) => {
                                if (state.currentWord.includes(char)) {
                                    const charStatus =
                                        state.currentWord[index] === char ? 'matched' : 'included'

                                    state.usedChars[char as TChar] = charStatus
                                    state.wordMatches[state.pointer].push(charStatus)
                                } else {
                                    state.usedChars[char as TChar] = 'wrong'
                                    state.wordMatches[state.pointer].push('wrong')
                                }
                            })
                        state.pointer++
                    } else {
                        state.unknownIndex = state.pointer
                    }
                } else {
                    state.gameOver = true
                    state.pointer++ //это нужно для сняния возможности редактирования
                }
            }
        },
        setCurrentWord: (state, {payload}: PayloadAction<string>) => {
            state.currentWord = payload
        },
        setGameOver: (state, {payload}: PayloadAction<boolean>) => {
            state.gameOver = payload
        },
        setNewGame: (state => {
            state.pointer = 1
            state.currentWord = getRandomWord()
            state.gameOver = initialState.gameOver
            state.gameWin = initialState.gameWin
            state.words = initialState.words
            state.usedChars = {}
            state.wordMatches = initialState.wordMatches
            state.unknownIndex = initialState.unknownIndex
        }),
        removeUnknownIndex: (state) => { state.unknownIndex = undefined }
    }
})

export const {
    setWordById,
    setPointer,
    setCurrentWord,
    pushPointedChar,
    popPointedChar,
    enterPointedWord,
    setGameOver,
    setNewGame,
    removeUnknownIndex
} = gameSlice.actions

export const {
    getPointer,
    getWordById,
    getCurrentWord,
    getMatchById,
    getUsedChars,
    getGameOver,
    getGameWin,
    getUnknownIndex
} = gameSlice.getSelectors()
