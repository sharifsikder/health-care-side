import initializeAuthentiCation from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentiCation()


const useFirebase = () => {

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
   

    const googleSingIn = () =>{

        signInWithPopup(auth,googleProvider)
        .then( (result) => {
         setUser(result.user)
        })
        .catch((error) =>{
            setError(error.message)
        });
    }
//     const handelEmail = e =>{
//         setEmail(e.target.value)
//         }

//         const handelPassword = e =>{
//             setPassword(e.target.value)
//            }
    

//     const emailSignIn = (e) => {
//         e.preventDefault()
//         console.log(email, password)
//         createUserWithEmailAndPassword(auth, email, password)
//        .then(result => {
    
//     console.log(result.user)
  
   
//   })
 
    

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
           setError(error.message)
          });
    }

    useEffect(() => {
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
              setUser(user)
             
            } else {
             setError("")
            }
          });

    }, [])

    return{
        user,
        error,
        logOut,
        googleSingIn,
      
    }
}

export default useFirebase;