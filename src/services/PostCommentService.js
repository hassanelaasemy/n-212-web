import ContentApi from "../../Api/ContentApis";

export const PostCommentService = async (id, comment) => {
    try {

        const response = ContentApi.postComment(id, comment)
        return response;
    } catch (error) {
        console.log(error);

    }
};