import React from "react";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";
import CommentCours from "../../components/Cours/CommentCours";
import UserInfo from "../../components/Cours/UserInfo";
import CoursVideoDetail from "../../components/Cours/CoursVideoDetail";
import '../../css/detailCours.css'

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

    return (

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="col-span-12 w-full sm:col-span-4 ">
                <UserInfo content={content} />
            </div>
            <div className="col-span-12 sm:col-span-8">

                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <img className="p-3 rounded-t-lg" src={`${BASE_URL}/storage/${content?.image}`} alt="product image" />
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{content.title}</h5>
                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{content.smallDescription}</p>

                </div>

                <CoursVideoDetail content={content} />

                <CommentCours content={content} />


            </div>
            <div className="col-span-12 w-full sm:col-span-4 comment_cours">
               

            </div>
        </div>
    );
}
