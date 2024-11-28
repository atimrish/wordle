import {useSelector} from "react-redux";
import {TMainState} from "@src/app/stores";

export const useAppSelector = useSelector.withTypes<TMainState>()