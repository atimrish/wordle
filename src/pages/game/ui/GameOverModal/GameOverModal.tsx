import * as s from './GameModal.module.css'
import {Modal} from "@src/shared/ui/Modal";
import {useAppSelector} from "@src/shared/lib";
import {getCurrentWord, getGameOver, setNewGame} from "@src/entities/game/model";
import {useDispatch} from "react-redux";

export const GameOverModal = () => {
    const dispatch = useDispatch()
    const isGameOver = useAppSelector(state => getGameOver(state.game))
    const currentWord = useAppSelector(state => getCurrentWord(state.game))

    return (
        <>
            <Modal open={isGameOver}>
                <div className={s.container}>
                    <h2 className={s.heading}>Игра окончена</h2>
                    <div className={s.current_word_container}>
                        Загадонное слово: <span className={s.current_word}>{currentWord}</span>
                    </div>

                    <button
                        className={s.button}
                        onClick={() => dispatch(setNewGame())}
                    >Новая игра</button>

                </div>
            </Modal>
        </>
    )
}