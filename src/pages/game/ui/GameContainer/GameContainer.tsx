import * as s from './GameContainer.module.css'
import {WordInput} from "@src/pages/game/ui/WordInput";
import {getWordById, TGameState} from "@src/entities/game/model";
import {useAppSelector} from "@src/shared/lib";
import {Keyboard} from "@src/pages/game/ui/Keyboard";

const GameContainer = () => {
    const words = (() => {
        const stack = []
        for (let i = 1; i <= 6; i++) {
            const word = useAppSelector(state =>
                getWordById(state.game, i as keyof TGameState['words'])) as string
            stack.push(word)
        }
        return stack
    })()

    return (
        <>
            <div className={s.container}>
                <div>
                    {
                        words.map((word, index) => <WordInput key={index} value={word}/>)
                    }
                </div>
                <Keyboard/>
            </div>

        </>
    )
}

export {GameContainer}