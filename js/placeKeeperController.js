'use strict'

function onInit() {
    window.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
}

function onSubmitForm() {
    const vals = {
        email: document.querySelector('#email').value,
        age: document.querySelector('#age').value,
        'bgColor': document.querySelector('#bg-color').value,
        'txtColor': document.querySelector('#txt-color').value,
        'birthDate': document.querySelector('#birth-date').value,
        'birthTime': document.querySelector('#birth-time').value,
    }
    _renderUserColors(vals)
    onSaveToStorage(vals)
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

function _renderUserColors({ bgColor, txtColor }) {
    document.querySelector('body').style.backgroundColor = bgColor
    document.querySelector('body').style.color = txtColor

}