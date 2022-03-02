import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../../pages/Login/Login/Firebase/Firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                // an error occur
            })
    }
    // console.log(user.displayName)

    // observe the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false)
            }
            else {
                setUser({});
                setIsLoading(false)

            }
        })
        return () => unsubscribe;
    }, [])

    return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
        isLoading,
        setIsLoading
    }

}
export default useFirebase;