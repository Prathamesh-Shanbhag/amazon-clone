import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useState } from 'react'
import firebase from 'firebase'

function Login() {
  const history = useHistory('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  var user = firebase.auth().currentUser

  const signIn = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      if (user?.displayName !== null) {
        history.push('/')
      } else {
        history.push('/Profile')
      }
    })
  }
  const register = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      user.updateProfile({
        displayName: displayName,
      })
      console.log(auth)
      if (auth) {
        history.push('/Profile')
        user.updateProfile({
          displayName: displayName,
        })
      }
    })
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='login__SignInBtn' type='submit' onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button onClick={register} className='login__RegisterBtn'>
          Create An Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login
