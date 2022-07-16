
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from './firebase-config';
import { useRouter } from 'next/router'


import GoogleButton from 'react-google-button'

const login = () => {

  const googleProvider = new GoogleAuthProvider();

  const router = useRouter();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {

    let token = sessionStorage.getItem('Token');

    if (token) {
      router.push("/")
    }

  }, [])

  const signIn = () => {

    signInWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(response.user)

      sessionStorage.setItem('Token', response.user.accessToken);
      router.push("/")
    }).catch((err) => {
      console.log(err.message)
    })

  }


  const signUpWithGoogle = () => {

    signInWithPopup(auth, googleProvider).then((response) => {
      console.log(response.user)
      sessionStorage.setItem('Token', response.user.accessToken);

      router.push("/");
    }).catch((err) => {
      console.log(err.message)
    })


  }

 




  return (
    <div>

      <h1>Login</h1>
      <input
        style={{
          height: '30px',
          width: '200px'
        }}
        type="text"
        placeholder='Email...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      />

      <br />

      <input
        style={{
          height: '30px',
          width: '200px'
        }}
        type="password"
        placeholder='Password...'
        value={password}
        onChange={(e) => setPassword(e.target.value)}

      />
      <br />

      <button
        style={{
          width: '100px',
          height: '30px',
          cursor: 'pointer',
        }}
        onClick={signIn}>Log In
      </button>


      <hr />
      <GoogleButton
        onClick={signUpWithGoogle}
      />


   



    </div>
  )
}

export default login