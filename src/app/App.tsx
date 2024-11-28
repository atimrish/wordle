import '@src/app/styles/global.css'
import {GamePage} from '@src/pages/game'
import {MainProvider} from "@src/app/providers";

const App = () => {
    return (
        <>
            <MainProvider>
                <GamePage/>
            </MainProvider>
        </>
    )
}

export {App}