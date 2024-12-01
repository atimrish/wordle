import * as s from './WordInput.module.css'
import {removeUnknownIndex, TCharMatch, TWordInput, TWordMatch} from "@src/entities/game/model";
import {memo, useRef} from "react";
import {useDispatch} from "react-redux";

type Props = {
    value: TWordInput,
    matches: TWordMatch,
    unknown: boolean,
}

const WordInput = memo((p: Props) => {
    const dispatch = useDispatch()
    const wordRef = useRef<HTMLDivElement>(null)
    const letters = p.value.padEnd(5, ' ')
    const containerClasses = [s.word]

    if (p.unknown) {
        containerClasses.push(s.unknown)

        setTimeout(() => {
            dispatch(removeUnknownIndex())
        }, 500)
    }

    return (
        <div className={containerClasses.join(' ')} ref={wordRef}>
            {
                letters.split('')
                    .map((letter, index) => {
                            const classes = [s.letter]

                            if (p.matches[index]) {
                                const status: Record<TCharMatch, any> = {
                                    'wrong': s.wrong_char,
                                    'matched': s.matched_char,
                                    'included': s.included_char
                                }
                                classes.push(status[p.matches[index]])
                            }

                            return <div key={index} className={classes.join(' ')}>{letter}</div>
                        }
                    )
            }
        </div>
    )
})

export {WordInput}