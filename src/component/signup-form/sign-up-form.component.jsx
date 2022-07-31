import { useState } from "react";
import FormInput from "../form-input/FormInput";
import './sign-up-form.styles.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('password does not match')
            return;
        } 

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            
            await createUserDocumentFromAuth(user, { displayName })

            resetFormFields();

        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email in use')
            }
            console.log(error)
        }
    
    }


    return (
        <div className='sign-up-container' >
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email below</span>
            <form onSubmit={handleSubmit} >
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;