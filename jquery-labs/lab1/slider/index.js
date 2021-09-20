let imgsSrcs = [];
let start = 0;
let end = 2;

for (let i = 0; i < 6; i++) {
    imgsSrcs.push(`img-${i}`);
}

function mvRight() {
    const rightImg = $(`#${imgsSrcs[end]}`)
    // const rightImg = document.querySelector(`#${imgsSrcs[end]}`);

    const middleIndex = end === 0 ? 5 : end - 1;
    const middleImg = $(`#img-${middleIndex}`)
    // const middleImg = document.querySelector(`#img-${middleIndex}`);

    const leftImg = $(`#${imgsSrcs[start]}`)
    // const leftImg = document.querySelector(`#${imgsSrcs[start]}`);

    const newIndex = end === 5 ? 0 : end + 1;
    const newImg = $(`#${imgsSrcs[newIndex]}`)
    // const newImg = document.querySelector(`#${imgsSrcs[newIndex]}`);

    start = middleIndex;
    end = newIndex;

    middleImg.animate({ order: 0 })
    rightImg.animate({ order: 1 })
    newImg.animate({ order: 2 })

    newImg.fadeIn()

    middleImg.animate({ height: '300px' })
    newImg.animate({ height: '300px' })
    rightImg.animate({ height: '400px' })
    leftImg.animate({ height: 0 })
}

function mvLeft() {
    const rightImg = $(`#${imgsSrcs[end]}`)
    // const rightImg = document.querySelector(`#${imgsSrcs[end]}`);

    const middleIndex = start === 5 ? 0 : start + 1;
    const middleImg = $(`#img-${middleIndex}`)
    // const middleImg = document.querySelector(`#img-${middleIndex}`);

    const leftImg = $(`#${imgsSrcs[start]}`)
    // const leftImg = document.querySelector(`#${imgsSrcs[start]}`);

    const newIndex = start === 0 ? 5 : start - 1;
    const newImg = $(`#${imgsSrcs[newIndex]}`)
    // const newImg = document.querySelector(`#${imgsSrcs[newIndex]}`);

    start = newIndex;
    end = middleIndex;

    middleImg.animate({ order: 2 })
    leftImg.animate({ order: 1 })
    newImg.animate({ order: 0 })

    newImg.fadeIn()


    middleImg.animate({ height: '300px' })
    newImg.animate({ height: '300px' })
    leftImg.animate({ height: '400px' })
    rightImg.animate({ height: 0 })
}

$(() => {
    imgsSrcs.forEach((imgSrc, index) => {
        const imgElement = $('<img />');
        imgElement.attr("src", `imgs/${imgSrc}.jpg`)
        // imgElement.src = `imgs/${imgSrc}.jpg`;

        imgElement.attr("id", `img-${index}`)
        // imgElement.id = `img-${index}`;

        imgElement.addClass('img')
        // imgElement.className = 'img';

        imgElement.css("order", `${index + 1}`)
        // imgElement.style.order = index + 1;

        if (index >= 0 && index <= 2) {
            imgElement.css("display", "block")
            imgElement.css('height', '300px')
        }
        // imgElement.style.display = 'block';

        if (index === 1)
            imgElement.css("height", "400px")
        // imgElement.style.height = '400px';

        const slider = $('#slider')
        // const slider = document.querySelector('#slider');

        slider.append(imgElement);
    });

    $('#left-btn').click(mvLeft)
    // document.querySelector('#left-btn').addEventListener('click', mvLeft);
    $('#right-btn').click(mvRight)
    // document.querySelector('#right-btn').addEventListener('click', mvRight);
});