import React from "react";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";
import CommentCours from "../../components/Cours/CommentCours";
import UserInfo from "../../components/Cours/UserInfo";
import CoursVideoDetail from "../../components/Cours/CoursVideoDetail";
import '../../css/detailCours.css'
import ReactPlayer from "react-player";

export default function DetailCours() {
    const { id } = useParams();

    const { data: content, isLoading, error } = useQuery({
        queryKey: ["contentDetail", id],
        queryFn: () => ContentApi.getContentDetailById(id),
        onError: (error) => {
            console.log("Error loading content detail.", error);
        },
    });




    if (isLoading) return <div>Loading...</div>;

    console.log(content);


    return (

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="col-span-12 w-full sm:col-span-4 ">
                <UserInfo content={content} />
            </div>
            <div className="col-span-12 sm:col-span-8">

                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    {content.contentType === 'formation'
                        ? <img className="p-3 rounded-t-lg" src={`${BASE_URL}/storage/${content?.image}`} alt="product image" />
                        : <div className="md:h-[300px] lg:h-[500px]">
                            <ReactPlayer config={{
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
                                style={{ borderRadius: '20px' }}
                                controls={true}
                                playing={false}
                                url={content.video} />
                        </div>}

                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{content.title}</h5>
                    <div className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400" dangerouslySetInnerHTML={{ __html: content.smallDescription }} />

                </div>

                <CoursVideoDetail content={content} />

                <CommentCours content={content} />


            </div>
            <div className="col-span-12 w-full sm:col-span-4 comment_cours">


            </div>
        </div>
    );
}
