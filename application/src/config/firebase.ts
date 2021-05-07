import firebase from 'firebase'
import firestore from 'firebase/firestore'
import { toast } from '../components/toast'

const config = {
  apiKey: "AIzaSyD_z7l6k1hkAkInAecmeGeNlEzo-4EIQsI",
  authDomain: "achikoapp.firebaseapp.com",
  projectId: "achikoapp",
  storageBucket: "achikoapp.appspot.com",
  messagingSenderId: "736941616403",
  appId: "1:736941616403:web:39b9e59a707b16d23cfee6",
  measurementId: "G-VHBJWY6T76"
};

firebase.initializeApp(config)
firebase.firestore()

export default firebase

export async function userLogin(email: string, password: string) {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log(res)
    return true
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function userRegister(email: string, password: string) {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(res)
    return true
  } catch(error) {
    toast(error.message)
    return false
  }
}