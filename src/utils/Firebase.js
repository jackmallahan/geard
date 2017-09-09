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

const database = firebase.database()

export default firebase
