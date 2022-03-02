import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase/useFirebase";

// create a context
export const authContext = createContext();

// destructure children
const AuthProvider = ({ children }) => {
    // call useFirebase values in a variable
    const allContext = useFirebase();

    return (
        // allcontext value provide to authContext children
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;