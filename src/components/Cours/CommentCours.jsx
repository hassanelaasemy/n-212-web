import React from 'react';
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { PostCommentService } from '../../services/PostCommentService';

export default function CommentCours({ content }) {


    const theme = useSelector((state) => state.theme.theme);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { data: comments = [], isLoading: commentIsLoading, error: commentError } = useQuery({
        queryKey: ["contentComment", content?.id],
        queryFn: () => ContentApi.getCommentsUser(content.id),
        enabled: !!content?.id,
        onError: (error) => {
            console.log("Error loading comments.", error);
        },
    });

    const onSubmit = async (data) => {
        try {
            const response = await PostCommentService(content.id, data.comment)
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    };



    if (commentIsLoading) return <div>Loading...</div>;

    return (
        <section className={` ${theme === 'datk' ? 'bg-black' : ''} border mt-2 border-gray-200 rounded-lg shadow py-8 lg:py-16 antialiased`}>
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className={`text-lg lg:text-2xl font-bold  text-gray-900 ${theme === 'dark' ? 'text-white' : ''} dark:text-white`}>Discussion ({comments.length})</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="6" {...register("comment")}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..." required></textarea>
                    </div>
                    <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Post</button>
                </form>

                {comments.map((comment) => (
                    <article className={`p-6 mb-2 text-base ${theme === 'dark' ? 'bg-black' : ''} border  border-gray-200 rounded-lg  rounded-lg dark:bg-gray-900`}>
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className={`inline-flex items-center  mr-3 text-sm  ${theme === 'dark' ? 'text-white' : ''} text-gray-900 dark:text-white font-semibold`}>
                                    <img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src={`${BASE_URL}/storage/avatars/${comment.user.avatar}`}
                                        alt="Michael Gough" />{comment.user.fullName}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                            </div>
                        </footer>
                        <p className={`text-gray-500 ${theme === 'dark' ? 'text-white' : ''} dark:text-gray-400`}>{comment.comment}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
