import SignUpForm from "../../component/signup-form/sign-up-form.component";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    

    return <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser} >
            Sign in with google popup
        </button>
        <SignUpForm />

    </div>
}

export default SignIn;