'use strict'

// 制定媒体轨 音频轨 视频轨 或者设定一些限制
// const mediaStreamContrains = {
//     video: true,
//     voice: true,
// }

const mediaStreamContrains = {
    video: {
        frameRate: {
            min: 20,
        },
        width: {
            min: 120,
            ideal: 120,
        },
        height: {
            min: 120,
            ideal: 120,
        },
        aspectRatio: 16 / 9,
    },
    audio: {
        sampleSize: 16,
        channelCount: 2,
    },
}

const localVideo = document.querySelector('video');

function gotLocalMediaStream(mediaStream) {
    localVideo.srcObject = mediaStream;
}

function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
    gotLocalMediaStream
).catch(
    handleLocalMediaStreamError
)