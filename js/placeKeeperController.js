'use strict'

function onInit() {
    window.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
}

function onSubmitForm(ev) {
    console.log('ev', ev)


}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}