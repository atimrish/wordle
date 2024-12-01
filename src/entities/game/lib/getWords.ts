import words from './words.json'
import {useRandom} from "@src/shared/lib";

export const getWords = () => {
    return words
}

export const getRandomWord = () => {
    const randomIndex = useRandom(0, words.length - 1)
    return words[randomIndex]
}