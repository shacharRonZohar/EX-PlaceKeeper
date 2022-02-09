'use strict'
const PLACES_STORAGE_KEY = 'placesDB'

var gPlaces = []

function loadPlaces() {
    gPlaces = loadFromStorage(PLACES_STORAGE_KEY)
}

function getPlaces() {
    return gPlaces
}

function addPlace(pos) {
    if (!gPlaces) gPlaces = []
    pos.id = makeId(9)
    gPlaces.push(pos)
    saveToStorage(PLACES_STORAGE_KEY, gPlaces)
}

function removePlace(id) {
    console.log('id', id)

    gPlaces = gPlaces.filter(place => place.id !== id)
    console.log('gPlaces', gPlaces)
    saveToStorage(PLACES_STORAGE_KEY, gPlaces)

}

function getPlacesAsCsv() {
    let csvStr = `Id, Name,langtitude, longtitude`
    gPlaces.forEach(place => {
        const csvLine = `\n${place.id}, ${place.name}, \$${place.coords.lat}, ${place.coords.lng}`
        csvStr += csvLine
    })
    return csvStr
}