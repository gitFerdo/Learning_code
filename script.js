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
    const canvas = faceapi.createCanvasFromMedia( video )
    document.body.append( canvas )
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions( canvas, displaySize )

    setInterval( async () =>
    {
        const detections = await faceapi.detectAllFaces( video, new faceapi.TinyFaceDetectorOptions() ).withFaceLandmarks().withFaceExpressions()

        console.log( detections )

        const resizeDetections = faceapi.resizeResults( detections, displaySize )
        canvas.getContext( '2d' ).clearRect( 0, 0, canvas.width, canvas.height )

        faceapi.draw.drawDetections( canvas, resizeDetections )
        faceapi.draw.drawFaceLandmarks( canvas, resizeDetections )
        faceapi.draw.drawFaceExpressions( canvas, resizeDetections )
    }, 100 )
} );