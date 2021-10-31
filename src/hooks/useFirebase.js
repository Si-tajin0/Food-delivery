import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
import initializeAuthentication from '../config/firebase.init';


// initialize firebase authentication

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const history = useHistory();

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    // on state change 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])


    // google sign In
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // sign out 
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                swal("LogOut Successful!", "You are logged out!", "Success");
                history.push('/')
            })
            .catch((err) => {
                swal("Something went wrong!", `${err.message}`, "error")
            });
    }

    return {
        user,
        setUser,
        signInWithGoogle,
        signOutUser
    }
};

export default useFirebase;