//import React from 'react';

type ImageButtonProps = {
    image: string;
    onClick: () => void;
}

export default function ImageButton({ image, onClick }: ImageButtonProps) {
    return (
        <button className="imageButton" onClick={onClick}>
            <img src={image} style={{ width: '80px', height: '80px' }}/>
        </button>
    );
}