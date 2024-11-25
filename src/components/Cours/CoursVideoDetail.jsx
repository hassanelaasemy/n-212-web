import React, { useState } from 'react'
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";
import Modal from '../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from "@fortawesome/free-solid-svg-icons";


export default function CoursVideoDetail({ content }) {

    const [isOpen, setIsOpen] = useState(false);
    const [video, setVideo] = useState('');


    const { data: videos = [], isLoading, error } = useQuery({
        queryKey: ["contentVideoDetail", content.id],
        queryFn: () => ContentApi.getVideoById(content.id),
        onError: (error) => {
            console.log("Error loading content detail.", error);
        },
    });

    const toggleModal = (video = '') => {
        setVideo(video);
        setIsOpen(!isOpen);
    };

    if (isLoading) return <div>Loading...</div>;

    console.log(videos);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Modal isOpen={isOpen} toggleModal={toggleModal} video={video} />

            {videos.map((video) => (
                <div
                    key={'video-content-'+video.id}
                    className="max-w-sm mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <img
                            className="rounded-t-lg"
                            src={`${BASE_URL}/storage/${video.image}`}
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {video.title}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">
                            {video.description}
                        </p>
                        {/* Pass the video ID when toggling the modal */}
                        <button
                            onClick={() => toggleModal(video)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                         <FontAwesomeIcon icon={faVideo} />
    
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
