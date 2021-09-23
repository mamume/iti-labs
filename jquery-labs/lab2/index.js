// Get random int for photos ids
function getRandomInt(max = 1000) {
    return Math.floor(Math.random() * max);
}

// Run after loading DOM
$(() => {
    // Select navigation bar
    const nav = $('nav')

    // Assign src for slider images using window width and height
    $('.img-slider').each((index, img) => {
        $(img).attr("src", `https://picsum.photos/seed/${getRandomInt()}/${window.innerWidth}/${window.innerHeight - nav.outerHeight()}`)
    })

    // Create random image cards, the number of images equals the number of iterations
    for (let i = 0; i < 12; i++) {
        // Create image card
        const imgCard = $('<div class="card m-2 shadow-sm" style="width: 18rem;"></div>')
        // Add zoom on hover class
        imgCard.addClass('zoom')

        // Create new image element
        const newImg = $('<img class="rounded"></img>')
        // Assign random src to image
        newImg.attr("src", `https://picsum.photos/seed/${getRandomInt()}/536/354`)
        // Append image to image card
        imgCard.append(newImg)
        // Append image card to image cards container
        $('#img-cards').append(imgCard)
    }
})

// Show page after loading content
window.addEventListener('load', () => {
    $('.spinner-border').addClass('d-none')
    $('.app').removeClass('d-none')
})

