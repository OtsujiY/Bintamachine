const userVideo = document.getElementById("camera");

const cameraSetting = {
    audio: false,
    video: {
        width: 200,
        height: 200,
        facingMode: "environment"
    }
}

const cameraStart = () => {
    navigator.mediaDevices.getUserMedia(cameraSetting).then((stream) => {
        userVideo.srcObject = stream;
    }).catch((err) => {
        console.log(err.toString());
    });
}

const $bintaHand = document.getElementById("binta_hand");

const handLeft = ["calc(50% - 450px)", "calc(50% + 50px)"];
let isHandUp = true;

const binta = () => {
    setTimeout(() => {
        isHandUp = Boolean(-isHandUp + 1);

        $bintaHand.style.left = handLeft[Number(isHandUp)];
        $bintaHand.src = "images/IMG_" + ( 4034 + -isHandUp ) + ".PNG";
    }, 70);
};

cameraStart();

document.addEventListener("click", () => {
    binta();
});

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        binta();
    }
})
