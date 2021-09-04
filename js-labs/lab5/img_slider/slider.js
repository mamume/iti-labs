let imgsSrcs = [];
let start = 0;
let end = 2;

for (let i = 0; i < 6; i++) {
    imgsSrcs.push(`img-${i}`);
}

function mvRight() {
    const rightImg = document.querySelector(`#${imgsSrcs[end]}`);

    const middleIndex = end === 0 ? 5 : end - 1;
    const middleImg = document.querySelector(`#img-${middleIndex}`);

    const leftImg = document.querySelector(`#${imgsSrcs[start]}`);

    const newIndex = end === 5 ? 0 : end + 1;
    const newImg = document.querySelector(`#${imgsSrcs[newIndex]}`);


    leftImg.style.display = 'none';

    middleImg.style.height = '300px';
    middleImg.style.order = '0';

    rightImg.style.height = '400px';
    leftImg.style.order = '1';

    newImg.style.display = 'initial';
    newImg.style.order = '2';

    start = middleImg;
    end = newIndex;
}

function mvLeft() {

    const rightImg = document.querySelector(`#${imgsSrcs[end]}`);
    const middleIndex = start === 5 ? 0 : start + 1;
    const middleImg = document.querySelector(`#img-${middleIndex}`);

    const leftImg = document.querySelector(`#${imgsSrcs[start]}`);

    const newIndex = start === 0 ? 5 : start - 1;
    const newImg = document.querySelector(`#${imgsSrcs[newIndex]}`);


    rightImg.style.display = 'none';

    middleImg.style.height = '300px';
    middleImg.style.order = '2';

    leftImg.style.height = '400px';
    leftImg.style.order = '1';

    newImg.style.display = 'initial';
    newImg.style.order = '0';

    end = end === 0 ? 5 : end - 1;
    start = newIndex;
}

document.addEventListener('DOMContentLoaded', () => {
    imgsSrcs.forEach((imgSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `imgs/${imgSrc}.jpg`;
        imgElement.id = `img-${index}`;
        imgElement.className = 'img';
        imgElement.style.order = index + 1;

        if (index >= 0 && index <= 2)
            imgElement.style.display = 'block';

        if (index === 1)
            imgElement.style.height = '400px';

        // const rightBtn = document.querySelector('#right-btn');
        const slider = document.querySelector('#slider');

        slider.append(imgElement);
    });

    document.querySelector('#left-btn').addEventListener('click', mvLeft);
    document.querySelector('#right-btn').addEventListener('click', mvRight);
});