
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'
import { firebaseAuth, firebaseDB } from '../boot/firebase'
import { ref, set } from "firebase/database"

const state = {
  userDetails: {}
}
const mutations = {}

const actions = {
  
  async registerUser ({}, payload) {
    
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
      let userID = firebaseAuth.currentUser.uid
      set(ref(firebaseDB, 'users/' + userID), {
        name: payload.name,
        email: payload.email,
        online: true
      })
      console.log(userCredential.user)
    }
    catch(error) {
      console.log(error)
    }
  },
  async signUser({}, payload) {
    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
      return userCredential
    }
    catch(error) {
      return 'Usuario ou palavra-passe errados'
    }
  },
  async logOff({}, payload) {
    try {
      await signOut(getAuth())
    } catch (error) {
      console.log(error)
    }
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}