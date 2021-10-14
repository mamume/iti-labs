function stopCamera(camera) {
    let stream = camera.srcObject;
    // console.log(stream)
    let tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++)
        tracks[i].stop();

    camera.srcObject = null;
}

async function launchCamera(camera) {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    camera.srcObject = stream;
    // console.log(stream)
}

document.addEventListener('DOMContentLoaded', () => {
    const camera = document.querySelector("#camera");
    const openCamera = document.querySelector("#open-camera");
    const cameraShot = document.querySelector("#camera-shot");
    const canvas = document.querySelector("canvas");

    openCamera.addEventListener('click', function () {
        if (openCamera.innerText == "Open Camera") {
            console.log('launch')
            launchCamera(camera)
            openCamera.innerText = "Stop Camera"
        } else {
            console.log('stop')
            stopCamera(camera)
            openCamera.innerText = "Open Camera"
        }
    });

    cameraShot.addEventListener('click', function () {
        canvas.getContext('2d').drawImage(camera, 0, 0, canvas.width, canvas.height);
    });
})