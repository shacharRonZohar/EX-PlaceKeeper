'use strict'

function onMainInit() {
    loadUser()
    if (getUserData()) _renderUserColors(getUserData())
}

function _renderUserColors({ bgColor, txtColor }) {
    document.querySelector('body').style.backgroundColor = bgColor
    document.querySelector('body').style.color = txtColor
}