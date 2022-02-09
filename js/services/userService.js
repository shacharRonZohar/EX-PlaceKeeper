'use strict'

const STORAGE_KEY = 'userData'

var gUser

function loadUser() {
    gUser = loadFromStorage(STORAGE_KEY)
}

function getUserData() {
    return gUser
}

function onSaveToStorage(userData) {
    saveToStorage(STORAGE_KEY, userData)
}