// import React, { useEffect, useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './VirtualTryOnPage.css';
// import * as faceapi from 'face-api.js';

// const feedbackMessages = [
//     "This glass suits your face!",
//     "This style is very trendy right now.",
//     "These glasses enhance your features!",
//     "Perfect choice for outdoor activities!",
//     "These glasses add a touch of elegance.",
//     "You look great in these!",
//     "These frames really complement your look.",
//     "This is a classic choice for any occasion.",
//     "Stylish choice for a fashionable look!",
//     "These frames are ideal for a casual day out.",
//     "This design offers great protection for your eyes.",
//     "These glasses are very comfortable to wear.",
//     "These will keep you looking sharp!",
//     "This is a popular choice among fashion enthusiasts.",
//     "These frames make a statement!"
// ];

// const VirtualTryOnPage = () => {
//     const location = useLocation();
//     const { product } = location.state || {};
//     const videoRef = useRef(null);
//     const [isCameraActive, setIsCameraActive] = useState(false);
//     const [feedback, setFeedback] = useState('');
//     const [faceShape, setFaceShape] = useState('');
//     const [modelsLoaded, setModelsLoaded] = useState(false);

//     useEffect(() => {
//         const startCamera = async () => {
//             try {
//                 const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//                 if (videoRef.current) {
//                     videoRef.current.srcObject = stream;
//                     setIsCameraActive(true);
//                 }
//             } catch (error) {
//                 console.error("Error accessing the camera: ", error);
//             }
//         };
//         startCamera();

//         return () => {
//             if (videoRef.current) {
//                 const stream = videoRef.current.srcObject;
//                 if (stream) {
//                     const tracks = stream.getTracks();
//                     tracks.forEach(track => track.stop());
//                 }
//             }
//         };
//     }, []);

//     const loadModels = async () => {
//         const MODEL_URL = process.env.PUBLIC_URL + '/models';
//         await Promise.all([
//             faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
//             faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
//             faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
//         ]);
//         setModelsLoaded(true);
//     };

//     const giveFeedback = () => {
//         const randomFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
//         setFeedback(randomFeedback);
//     };

//     useEffect(() => {
//         loadModels();
//     }, []);

//     useEffect(() => {
//         if (isCameraActive && modelsLoaded) {
//             detectFace();
//         }
//     }, [isCameraActive, modelsLoaded]);

//     const detectFace = async () => {
//         if (isCameraActive && videoRef.current) {
//             const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();

//             if (detections.length > 0) {
//                 const landmarks = detections[0].landmarks;
//                 classifyFaceShape(landmarks);
//             } else {
//                 setFaceShape('No face detected.');
//             }
//             requestAnimationFrame(detectFace);
//         } else {
//             console.log('Camera is not active or videoRef is null.');
//         }
//     };

//     const classifyFaceShape = (landmarks) => {
//         const jawWidth = landmarks.getJawOutline()[0].x - landmarks.getJawOutline()[16].x;
//         const faceHeight = landmarks.getJawOutline()[8].y - landmarks.getForehead()[0].y;
//         const aspectRatio = jawWidth / faceHeight;

//         if (aspectRatio < 1.2) {
//             setFaceShape('Round');
//         } else if (aspectRatio < 1.5) {
//             setFaceShape('Square');
//         } else {
//             setFaceShape('Oval');
//         }
//     };

//     return (
//         <div className="virtual-try-on-page">
//             <div className="left-panel">
//                 {product ? (
//                     <div className="glass-preview">
//                         <img src={product.image} alt={product.name} />
//                         <h2>{product.name}</h2>
//                         <p>{product.description}</p>
//                         <p>Price: {product.price}</p>
//                         <p>Company: {product.company}</p>
//                         <button onClick={giveFeedback}>Try On</button> {/* Button to trigger feedback */}
//                     </div>
//                 ) : (
//                     <p>No glass selected.</p>
//                 )}
//             </div>
//             <div className="center-panel">
//                 <video ref={videoRef} autoPlay playsInline className="camera-feed" />
//             </div>
//             <div className="right-panel">
//                 <h2>Feedback</h2>
//                 <p>{feedback || 'Click "Try On" to get feedback!'}</p>
//                 <h3>Face Shape: {faceShape || 'Analyzing...'}</h3>
//             </div>
//         </div>
//     );
// };

// export default VirtualTryOnPage;

import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './VirtualTryOnPage.css';
import * as faceapi from 'face-api.js';
import { detectFace } from '../utils/faceDetection';

const feedbackMessages = [
    "This glass suits your face!",
    "This style is very trendy right now.",
    "These glasses enhance your features!",
    "Perfect choice for outdoor activities!",
    "These glasses add a touch of elegance.",
    "You look great in these!",
    "These frames really complement your look.",
    "This is a classic choice for any occasion.",
    "Stylish choice for a fashionable look!",
    "These frames are ideal for a casual day out.",
    "This design offers great protection for your eyes.",
    "These glasses are very comfortable to wear.",
    "These will keep you looking sharp!",
    "This is a popular choice among fashion enthusiasts.",
    "These frames make a statement!"
];

const VirtualTryOnPage = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [faceShape, setFaceShape] = useState('Oval'); // Default face shape
    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setIsCameraActive(true);
                }
            } catch (error) {
                console.error("Error accessing the camera: ", error);
            }
        };
        startCamera();

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
            }
        };
    }, []);

    const loadModels = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + '/models';
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoaded(true);
    };

    const giveFeedback = () => {
        const randomFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
        const shapeFeedback = faceShape ? `Your face shape is ${faceShape}.` : '';
        setFeedback(`${shapeFeedback} ${randomFeedback}`);
    };

    const takePicture = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
            const imageData = canvasRef.current.toDataURL('image/png');
            setCapturedImage(imageData);
        }
    };

    useEffect(() => {
        loadModels();
    }, []);

    useEffect(() => {
        if (isCameraActive && modelsLoaded && videoRef.current) {
            detectFace(videoRef.current, setFaceShape, setFeedback);
        }
    }, [isCameraActive, modelsLoaded]);

    return (
        <div className="virtual-try-on-page">
            <div className="left-panel">
                {product ? (
                    <div className="glass-preview">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Company: {product.company}</p>
                        <button onClick={giveFeedback}>Try On</button>
                    </div>
                ) : (
                    <p>No glass selected.</p>
                )}
            </div>

            <div className="center-panel">
                <video ref={videoRef} autoPlay playsInline className="camera-feed" />
                <button onClick={takePicture}>Take Picture</button>
                <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            </div>

            <div className="right-panel">
                <h2>Feedback</h2>
                <p>{feedback || 'Click "Try On" to get feedback!'}</p>
                <h3>Face Shape: {faceShape}</h3>

                {capturedImage && (
                    <div className="captured-image-container">
                        <h3>Captured Image:</h3>
                        <img src={capturedImage} alt="Captured" className="captured-image" />
                    </div>
                )}

                <div className="chatbot-container">
                    <iframe
                        src="https://bot.orimon.ai/deploy/index.html?tenantId=0dcb661b-0281-499d-b628-838dbfdb37c7&testBot=true&defaultOpen=true"
                        width="100%"
                        height="600px"
                        style={{ border: 'none', borderRadius: '10px' }}
                        title="AI Chatbot"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VirtualTryOnPage;
