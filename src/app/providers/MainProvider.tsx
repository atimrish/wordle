import {ReactNode} from "react";
import {Provider} from "react-redux";
import {mainStore} from '@src/app/stores'

export const MainProvider = ({children}: {children: ReactNode}) => {
    return (
    <Provider store={mainStore}>
        {children}
    </Provider>
    )
}