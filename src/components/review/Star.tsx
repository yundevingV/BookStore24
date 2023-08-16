import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import icons for stars
import { useDispatch } from "react-redux";
import { saveBookRating } from "../../action/book_rating";
import "../../styles/fontAwesome.css"

interface StarRatingProps {
    initialRating?: number;
}

export default function StarRating({ initialRating = 0 } : StarRatingProps) {
    const [rating, setRating] = useState(initialRating);

    const dispatch = useDispatch();


    const handleStarClick = (newRating: number) => {
        setRating(newRating);
        dispatch(saveBookRating(newRating));
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={index < rating ? "star active" : "star"}
                    onClick={() => handleStarClick(index + 1)}
                />
            ))}
        </div>
    );
};

