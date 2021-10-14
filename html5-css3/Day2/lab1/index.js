function insertPositionInDOM(position) {
    const lat = document.querySelector('#lat')
    const long = document.querySelector('#long')

    lat.innerText = position.coords.latitude
    long.innerText = position.coords.longitude
}

document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(insertPositionInDOM)
})