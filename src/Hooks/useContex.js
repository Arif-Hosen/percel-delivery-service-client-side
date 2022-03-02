import { useContext } from "react"
import { authContext } from "../Context/authProvider"

// useContext hooks used for authContext context
const useAuth = () => {
    return useContext(authContext);
}

export default useAuth;