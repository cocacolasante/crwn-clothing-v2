import { useState, useContext } from "react";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput";
import './sign-in-form.styles.scss'

import { UserContext } from "../../contexts/users.contexts";



import { signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const { setCurrentUser } = useContext(UserContext)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        setCurrentUser(user);

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        try{
            const {user} = await signInUserWithEmailAndPassword(email, password)
            
            resetFormFields();
            setCurrentUser(user);

        } catch(error){
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect username or password')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:
                    console.log(error)
            }
            
        }
    
    }


    return (
        <div className='sign-up-container' >
            <h2>Already have an account?</h2>
            <span>Sign In with your email below</span>
            <form onSubmit={handleSubmit} >

                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
                <div className='buttons-container' >
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType='google' type='button' onClick={signInWithGoogle} >Google Sign-In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;