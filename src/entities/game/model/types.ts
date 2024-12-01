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
    wordMatches: {
        1: TWordMatch,
        2: TWordMatch,
        3: TWordMatch,
        4: TWordMatch,
        5: TWordMatch,
        6: TWordMatch,
    }
    pointer: keyof TGameState['words'],
    currentWord: string,
    usedChars: Partial<Record<TChar, TCharMatch>>,
    gameOver: boolean,
    gameWin: boolean,
    unknownIndex?: keyof TGameState['words'],
}

export type TSetWordPayload = {
    wordId: keyof TGameState['words'],
    value: string
}

export type TSetPointerPayload = keyof TGameState['words']
export type TChar =
    'а' | 'б' | 'в' | 'г' | 'д' | 'е' | 'ж' | 'з' | 'и' | 'й' |
    'к' | 'л' | 'м' | 'н' | 'о' | 'п' | 'р' | 'с' | 'т' | 'у' |
    'ф' | 'х' | 'ч' | 'ц' | 'ш' | 'щ' | 'ъ' | 'ь' | 'э' | 'ю' | 'я'

export type TWord = Array<TChar>
export type TCharMatch = 'matched' | 'included' | 'wrong'
export type TWordMatch = Array<TCharMatch>