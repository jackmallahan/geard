import React from 'react'
import firebase, { database } from 'firebase'

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyBwwKcCfasOVqpMgPsQwKKftoapeEbaE_g',
	authDomain: 'geard-43e3f.firebaseapp.com',
	databaseURL: 'https://geard-43e3f.firebaseio.com',
	projectId: 'geard-43e3f',
	storageBucket: '',
	messagingSenderId: '516201890480'
}

firebase.initializeApp(config)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export const signIn = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

export default firebase
