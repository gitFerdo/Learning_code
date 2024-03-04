const video = document.getElementById( 'video' );

Promise.all( [
    faceapi.nets.tinyFaceDetector.loadFromUri( '/models' ),
    faceapi.nets.faceLandmark68Net.loadFromUri( '/models' ),
    faceapi.nets.faceRecognitionNet.loadFromUri( '/models' ),
    faceapi.nets.faceExpressionNet.loadFromUri( '/models' )
] ).then( startVideo );

function startVideo ()
{
    navigator.mediaDevices.getUserMedia( { video: {} } )
        .then( stream => video.srcObject = stream )
        .catch( err => console.error( err ) );
}

video.addEventListener( 'playing', () =>
{
    console.log( 'playing' )
} );