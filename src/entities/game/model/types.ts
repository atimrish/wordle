export type TWordInput = string

export type TGameState = {
    words: {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string,
    },
    pointer: keyof TGameState['words']
}

export type TSetWordPayload = {
    wordId: keyof TGameState['words'],
    value: string
}

export type TSetPointerPayload = keyof TGameState['words']