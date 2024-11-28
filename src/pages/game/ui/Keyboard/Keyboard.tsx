import * as s from './Keyboard.module.css'
import {useDispatch} from "react-redux";
import {pushPointedChar, popPointedChar} from "@src/entities/game/model";

export const Keyboard = () => {
    const dispatch = useDispatch()

    const rows = [
        ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
        ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
        ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
    ]

    const pushChar = (i: string) => {
        dispatch(pushPointedChar(i))
    }

    return (
        <>
            <div className={s.keyboard_container}>
                <div className={s.keyboard_row}>
                    {rows[0].map(i => <div onClick={() => pushChar(i)}>{i}</div>)}
                </div>
                <div className={s.keyboard_row}>
                    {rows[1].map(i => <div onClick={() => pushChar(i)}>{i}</div>)}
                </div>
                <div className={s.keyboard_row}>
                    <div onClick={() => dispatch(popPointedChar())}>backspace</div>
                    {rows[2].map(i => <div onClick={() => pushChar(i)}>{i}</div>)}
                    <div>Enter</div>
                </div>
            </div>
        </>
    )
}