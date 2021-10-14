function insertPositionInDOM(position) {
    document.querySelector('body').innerHTML = `
        <br />
        <div>Latitude: ${position.coords.latitude}</div>
        <div id="lat"></div>
        <br />
        <div>Longitude: ${position.coords.longitude}</div>
        <div id="long"></div>`
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#start-btn')

    btn.addEventListener('click', () => {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(insertPositionInDOM)
        else
            alert('No Permission')
    })
})