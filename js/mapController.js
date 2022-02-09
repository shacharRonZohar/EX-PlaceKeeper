'use strict'

function initMap() {
    loadUser()
    loadPlaces()

    // The location of Eilat
    const eilat = { lat: 29.55805, lng: 34.94821 }

    // The map, centered at Eilat
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 5,
        center: eilat,
    })

    // The marker, positioned at Eilat
    new google.maps.Marker({
        position: eilat,
        map: map,
    })
    map.addListener('click', (ev) => {
        const name = prompt('Gib name')
        const pos = {
            name,
            coords: {
                lat: ev.latLng.lat(),
                lng: ev.latLng.lng()
            },
        }
        onAddPlace(pos)
        renderPlaces()
    })
    renderPlaces()
    _addCurrLocBtn(map)
}

function onAddPlace(pos) {
    addPlace(pos)
}

function onRemovePlace(id) {
    removePlace(id)
    renderPlaces()
}

function renderPlaces() {
    const places = getPlaces()
    if (!places) return
    document.querySelector('.user-places').innerHTML = places.map(place => {
        return `<div class="place">
            <span>${place.name}</span>
            <span>Latitude: ${place.coords.lat}</span>
            <span>Longtitude: ${place.coords.lng}</span>
            <button onclick="onRemovePlace('${place.id}')">Delete Place</button>
        </div>
            `
    }).join('')
}

function onShowPlaces() {
    document.querySelector('.user-places').classList.toggle('open')
}

function downloadCsv(elLink) {
    const csvContent = getPlacesAsCsv()
    elLink.href = `data:text/csv;charset=utf-8, ${csvContent}`
}

function _addCurrLocBtn(map) {
    const locationButton = document.createElement('button');
    locationButton.innerText = 'Pan to Current Location';
    locationButton.classList.add('custom-map-control-button');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition(position => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
            new google.maps.Marker({
                position: pos,
                map: map,
            })
            map.setCenter(pos);
        })
    })
}