import initializeAuthentiCation from "../Firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentiCation()


const useFirebase = () => {

    
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true)


   

    const googleSingIn = () =>{
        const googleProvider = new GoogleAuthProvider();
         signInWithPopup(auth,googleProvider)
         .then(result => {
             setUser(result.user)
         })
       
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false));
          
    }
    useEffect(() => {
        
     const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
            
              setUser(user)
             
            } else {
             setUser({})
            }
            setIsLoading(false)
          });

          return () => unsubscribed;

    }, [])

    const handelName =(e) =>{
        setName(e.target.value)

    }
    const HandelEmail =(e) => {
        setEmail(e.target.value)
    }
    const HandelPassword = (e) =>{
        setPassword(e.target.value)
    }
    
    const signUpEmail = (e) => {
        
        e.preventDefault();
        if(password.length < 8){
            setError('Passwoed Should be 2 uppercase and 8 character')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
            setError('Registation successful')
            setUserName()
          
        })
        .catch((error) => {
            setError(error.message)
        }) 
    }

    const setUserName = () =>{
        updateProfile(auth.currentUser,{displayName: name})
        .then(result => {  })
    }

    const signInEmail = (e) => {
        e.preventDefault();
       
     return signInWithEmailAndPassword(auth, email, password)
     
     .catch((error) => {
        setError(error.message)
    })
      
    }

    return{
        user,
        error,
        name,
        email,
        password,
        isLoading,
        logOut,
        googleSingIn,
        handelName,
        HandelEmail,
        HandelPassword,
        signUpEmail,
        signInEmail
      
    }
}

export default useFirebase;