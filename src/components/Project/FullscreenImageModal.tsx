import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function FullscreenImageModal({
    images,
    currentIndex,
    handlePrev,
    handleNext,
    handleClose,
}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
                className="fixed top-4 right-4 text-white text-2xl z-50"
                onClick={handleClose}
            >
                ✕
            </button>

            <div className="relative">
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:text-gray-700 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 text-xl transition"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>

                <img
                    src={images[currentIndex]}
                    alt="fullscreen"
                    className="max-h-[90vh] max-w-[90vw] rounded shadow"
                />

                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-gray-700 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 text-xl transition"
                >
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
