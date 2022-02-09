'use strict'

function onUserInit() {
    window.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
}

function onSubmitForm() {
    const keyOpts = ['email', 'age', 'bgColor', 'txtColor', 'birthDate', 'birthTime']
    const elInputs = [...document.querySelectorAll('input:not([type="submit"])')]
    const userData = elInputs.reduce((userData, currInput, currIdx) => {
        const currVal = currInput.value
        userData[keyOpts[currIdx]] = currVal
        return userData
    }, {})
    _renderUserColors(userData)
    setgUser(userData)
    saveUserToStorage()
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}