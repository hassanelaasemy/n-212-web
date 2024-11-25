import React from "react";
import ReactPlayer from "react-player";

export default function Modal({ isOpen, toggleModal, video }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white w-full max-w-3xl sm:rounded-lg shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {video.title}
          </h3>
        </div>

        {/* Video Player */}
        <div className="p-4 " style={{height:'300px'}}>
          <div className="aspect-w-16 aspect-h-9 h-full rounded-lg overflow-hidden">
            <ReactPlayer
              config={{
                youtube: {
                  playerVars: {
                    controls: 1,
                    modestbranding: 1,
                    rel: 0,
                    iv_load_policy: 3,
                  },
                },
              }}
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              url={video.video}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={() => toggleModal()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
