import { useEffect, useRef, useState } from 'react';
import ToggleButton from './ToggleButton';

const Audio = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        audioRef.current.volume = 0.2;
    }, []);

    return (
        <div className="fixed top-4 right-32 z-500">
            <div className="relative group">
                <ToggleButton isOn={isPlaying} onToggle={toggleAudio} />
            </div>
            <audio ref={audioRef} src="/audio/music.mp3" loop />
        </div>
    );
};

export default Audio;

