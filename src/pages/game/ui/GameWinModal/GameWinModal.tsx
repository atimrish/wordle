import * as s from './GameWinModal.module.css'
import {Modal} from "@src/shared/ui/Modal";
import {useAppSelector} from "@src/shared/lib";
import {getGameWin, setNewGame} from "@src/entities/game/model";
import {useDispatch} from "react-redux";

export const GameWinModal = () => {
    const dispatch = useDispatch()
    const gameWin = useAppSelector(state => getGameWin(state.game))

    return (
        <>
            <Modal open={gameWin}>
                <div className={s.container}>
                    <h2 className={s.heading}>Вы отгадали слово!</h2>
                    <button
                        className={s.button}
                        onClick={() => dispatch(setNewGame())}
                    >Новая игра</button>
                </div>
            </Modal>
        </>
    )
}
