'use strict'

const STORAGE_KEY_USER = 'userData'

var gUser

function loadUser() {
    gUser = loadFromStorage(STORAGE_KEY_USER)
}

function setgUser(userObj) {
    gUser = userObj
}

function getUserData() {
    return gUser
}

function saveUserToStorage() {
    saveToStorage(STORAGE_KEY_USER, gUser)
}