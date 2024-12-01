import * as s from './GameContainer.module.css'
import {WordInput} from "@src/pages/game/ui/WordInput";
import {getMatchById, getUnknownIndex, getWordById, setCurrentWord, TGameState} from "@src/entities/game/model";
import {useAppSelector} from "@src/shared/lib";
import {Keyboard} from "@src/pages/game/ui/Keyboard";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getRandomWord} from "@src/entities/game/lib";
import {GameOverModal} from "@src/pages/game/ui/GameOverModal";
import {GameWinModal} from "@src/pages/game/ui/GameWinModal";

const GameContainer = () => {
    const dispatch = useDispatch();
    const unknownIndex = useAppSelector(state => getUnknownIndex(state.game))

    const words = (() => {
        const stack = []
        for (let i = 1; i <= 6; i++) {
            const word = useAppSelector(state =>
                getWordById(state.game, i as keyof TGameState['words'])) as string
            const match = useAppSelector(state =>
                getMatchById(state.game, i as keyof TGameState['words']))
            stack.push({ word, match })
        }
        return stack
    })()

    useEffect(() => {
        dispatch(setCurrentWord(getRandomWord()))
    }, []);

    return (
        <>
            <div className={s.container}>
                <div>
                    {
                        words.map(({word, match}, index) =>
                            <WordInput
                                key={index}
                                value={word}
                                matches={match}
                                unknown={unknownIndex ? unknownIndex - 1 === index : false}
                            />)
                    }
                </div>
                <Keyboard/>
            </div>
            <GameOverModal/>
            <GameWinModal/>
        </>
    )
}

export {GameContainer}