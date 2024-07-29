import { useEffect, useRef, useState } from 'react';
import css from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(percentage);
    const previousPercentage = useRef(percentage);

    useEffect(() => {
        if (previousPercentage.current !== percentage) {
            setCurrentPercentage(previousPercentage.current);
            // Force reflow for smooth transition
            requestAnimationFrame(() => {
                setCurrentPercentage(percentage);
            });
        }
        previousPercentage.current = percentage;
    }, [percentage]);

    return (
        <div className={css.progressBar}>
            <div
                className={css.progress}
                style={{
                    width: `${currentPercentage}%`,
                    transition: 'width 0.5s ease-in-out' // Ensure smooth animation
                }}
            >
                <div className={css.progressIndicator}></div>
            </div>
            {(percentage === 30 || percentage === 70) && (
                <div className={css.milestone} style={{ left: `${percentage - 3}%` }}>
                    {percentage}%
                </div>
            )}
        </div>
    );
};

export default ProgressBar;
