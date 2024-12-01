import * as s from './Keyboard.module.css'
import {useDispatch} from "react-redux";
import {
    enterPointedWord,
    getUsedChars,
    popPointedChar,
    pushPointedChar,
    TChar,
    TCharMatch
} from "@src/entities/game/model";
import {useEffect} from "react";
import {useAppSelector} from "@src/shared/lib";

export const Keyboard = () => {
    const usedChars =
        useAppSelector(state => getUsedChars(state.game))

    const rows = [
        ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
        ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
        ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
    ]

    const dispatch = useDispatch()

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'Backspace') {
            dispatch(popPointedChar())
            return
        }

        if (e.key === 'Enter') {
            dispatch(enterPointedWord())
            return
        }

        const regex = /[А-Яа-я]/i
        if (regex.test(e.key)) {
            dispatch(pushPointedChar(e.key.toLowerCase()))
        }
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => window.removeEventListener("keyup", handleKeyUp);
    }, []);

    const pushChar = (i: string) => {
        dispatch(pushPointedChar(i))
    }

    const statuses: Record<TCharMatch, string> = {
        'wrong': s.wrong,
        'matched': s.matched,
        'included': s.included,
    }

    const getClass = (char: TChar) => usedChars[char] ? statuses[usedChars[char] as TCharMatch]: ''

    return (
        <>
            <div className={s.keyboard_container}>
                <div className={s.keyboard_row}>
                    {rows[0].map(i =>
                        <div className={getClass(i as TChar)} onClick={() => pushChar(i)}>{i}</div>)}
                </div>
                <div className={s.keyboard_row}>
                    {rows[1].map(i =>
                        <div className={getClass(i as TChar)} onClick={() => pushChar(i)}>{i}</div>)}
                </div>
                <div className={s.keyboard_row}>
                    <div onClick={() => dispatch(popPointedChar())}>backspace</div>
                    {rows[2].map(i =>
                        <div className={getClass(i as TChar)} onClick={() => pushChar(i)}>{i}</div>)}
                    <div onClick={() => dispatch(enterPointedWord())}>Enter</div>
                </div>
            </div>
        </>
    )
}