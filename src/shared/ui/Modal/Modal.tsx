import {PropsWithChildren} from "react";
import * as s from './Modal.module.css'
import {createPortal} from "react-dom";

export type TModal = {
    open: boolean
}

export const Modal = (p : PropsWithChildren<TModal>) => {
    return p.open && createPortal(
        (<>
            <div className={s.overlay}>
                <div className={s.modal_container}>
                    {p.children}
                </div>
            </div>
        </>),
        document.getElementById('modal-portal') as HTMLElement,
    )
}