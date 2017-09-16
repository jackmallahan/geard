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

export const auth = firebase.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const googleSignIn = () => auth.signInWithPopup(googleProvider)

export const signOut = () => auth.signOut()

export default firebase
