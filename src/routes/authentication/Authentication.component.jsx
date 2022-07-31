import SignUpForm from "../../component/signup-form/sign-up-form.component";
import SignInForm from "../../component/signin-form/sign-in-form.component";

import "./authentication.styles.scss"

const Authentication = () => {

  
   
    

    return <div className="authentication-container" >
        <SignInForm />
        <SignUpForm />

    </div>
}

export default Authentication;