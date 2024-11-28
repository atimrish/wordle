import {GameContainer} from "@src/pages/game/ui/GameContainer";
import {useEffect} from "react";
import {popPointedChar, pushPointedChar} from "@src/entities/game/model";
import {useDispatch} from "react-redux";

const GamePage = () => {
    const dispatch = useDispatch();

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'Backspace') {
            dispatch(popPointedChar())
            return
        }

        const regex = /[А-Яа-я]/i
        if (regex.test(e.key)) {
            dispatch(pushPointedChar(e.key))
        }
    }

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => window.removeEventListener("keyup", handleKeyUp);
    }, []);

    return (
        <>
            <GameContainer/>
        </>
    )
}

export {GamePage}
