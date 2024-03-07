import React, { useState } from 'react';
import { images } from './imageList'; // Importing the predefined list of images

const Gallery = () => {
    // State to manage the index of the current image
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle navigation to the next image
    const nextImage = () => {
        if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    // Function to handle navigation to the previous image
    const prevImage = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
        {/* Display the current image */}
        <img src={images[currentIndex].url} alt={images[currentIndex].description} style={{ maxWidth: '500px', maxHeight: '500px' }} />
        {/* Display the description of the current image */}
        <p>{images[currentIndex].description}</p>
        {/* Navigation buttons */}
        <button onClick={prevImage} disabled={currentIndex === 0}>Previous</button>
        <button onClick={nextImage} disabled={currentIndex === images.length - 1}>Next</button>
        </div>
    );
};

export default Gallery;
