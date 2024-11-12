import React from 'react';

import axios from 'axios';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from './0Auth';

function Auth() {
    const googleAuth = async () => {
        try {
            const Provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, Provider);
            const token = await result.user.getIdToken();
            console.log(result.user.displayName);

            const response = await axios.post("http://localhost:5000/auth/google", {
                name: result.user.displayName,
                email: result.user.email,
                profilePicture: result.user.photoURL
            }, {
                withCredentials: true
            });

            console.log(response.data);
           window.location.reload()

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div >
            <button
                onClick={googleAuth}
            >
                Click Me
            </button>
        </div>
    )
}

export default Auth