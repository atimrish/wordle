import * as s from './WordInput.module.css'
import {TWordInput} from "@src/entities/game/model";
import {memo} from "react";

type Props = {
    value: TWordInput
}

const WordInput = memo((p: Props) => {
    const letters = p.value.padEnd(5, ' ')

    return (
        <div className={s.word}>
            {
                letters.split('')
                    .map((letter, index) => <div key={index} className={s.letter}>{letter}</div>)
            }
        </div>
    )
})

export {WordInput}