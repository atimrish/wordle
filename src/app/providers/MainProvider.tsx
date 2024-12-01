import {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import {mainStore} from '@src/app/stores'

export const MainProvider = ({children}: PropsWithChildren) => {
    return (
    <Provider store={mainStore}>
        {children}
    </Provider>
    )
}