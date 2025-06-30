import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import { finishLoading, finishSelectedMethod, startCode, startLoading, startMethods, startSelectedMethod } from "../store/authMethodsSlice";
import { userMethodsDb } from "../data/methods";
import { AuthMethod, onChangeArgs } from "../interfaces/AuthMethod.interface";

interface useAuthenticationMethodsArgs {
    onChange?: ( args: onChangeArgs ) => void;
}


export const useAuthenticationMethods = ({onChange}: useAuthenticationMethodsArgs) => {
    const { methods, isLoading, selected, code } = useSelector((state: RootState) => state.authMethods);
    const dispatch = useDispatch();
    
    const userMethods = () => {
        dispatch(startLoading());
        const methods = userMethodsDb;
        dispatch(startMethods(methods))
        dispatch(finishLoading())
    }

    const setSelectedMethod = (method: AuthMethod) => {
        dispatch(startSelectedMethod(method))
    }   

    const discardSelectedMethod = (code: string | null) => {
        dispatch(finishSelectedMethod());
        dispatch(startCode(code));
    }

    const senCode = (code: string) => {
       onChange && onChange({code});
       dispatch(startCode(null));
    }

    return {
        methods,
        selected,
        isLoading,
        code,
        userMethods,
        setSelectedMethod,
        discardSelectedMethod,
        senCode
    }

}