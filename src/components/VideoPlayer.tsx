import {useRef, useState} from "react";
import {Pause, Play} from "lucide-react";

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Video Player */}
            <div className="relative h-[536px]">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZjJhMzc7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MTUxO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0YjU1NjM7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+Cjwvc3ZnPgo="
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                {/* Bottom gradient overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"/>

                {/* Play Button Overlay - Bottom Left */}
                <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full pl-3  py-2 transition-all duration-300 ease-in-out">
                        <button
                            onClick={togglePlay}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            {isPlaying ? (
                                <Pause className="w-6 h-6 text-gray-800"/>
                            ) : (
                                <Play className="w-6 h-6 text-gray-800 ml-1"/>
                            )}
                        </button>

                        <div
                            className={`text-white text-sm font-medium transition-all duration-500 ease-out overflow-hidden ${
                                !isPlaying
                                    ? 'opacity-100 max-w-xs translate-x-0'
                                    : 'opacity-0 max-w-0 -translate-x-0'
                            }`}
                        >
                            <div className="whitespace-nowrap pr-3">
                                Let&#39;s rule out embryonic hemangiosarcoma
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Title */}
            <div className="bg-gray-50 p-4">
                <div className="text-sm text-gray-600 italic">
                    Walkthrough of how MAI-DxO works through a case to reach a diagnosis
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;