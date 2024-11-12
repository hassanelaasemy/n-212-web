import CustomAxios from "./axois";
const ContentApi = {
  getCommingSoonContent: async () => {
    const response = await CustomAxios.get("/api/content/coming");
    return [...response.data.contents, ...response.data.vidoes];
  },
  getCommingSoonVideo: async () => {
    const response = await CustomAxios.get("/api/content/coming");
    return response.data.vidoes;
  },
  getQuiqlyContent: async () => {
    const response = await CustomAxios.get("/api/content/quickly");
    if (response.status === 429) {
      throw new Error("Rate limit exceeded");
    }
    return response.data;
  },
  getFormationContent: async () => {
    const token =  localStorage.getItem("token");
    const response = await CustomAxios.get("/api/content/formation", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getPodcastContent: async () => {
    const response = await CustomAxios.get("/api/content/podcast");
    return response.data;
  },
  getYoutubeContent: async () => {
    const response = await CustomAxios.get("/api/content/chaine");
    return response.data;
  },
  getEvents: async () => {
    const response = await CustomAxios.get("/api/event");
    return response.data;
  },
  getBlogs: async () => {
    const response = await CustomAxios.get("/api/blog");
    return response.data;
  },
  getProgramContent: async () => {
    const response = await CustomAxios.get("/api/program");
    return response.data;
  },
  getPupularSpeakers: async () => {
    const response = await CustomAxios.get("/api/populaire");
    return response.data;
  },
  getAllSpeakers: async () => {
    const response = await CustomAxios.get("/api/speakers");
    return response.data;
  },
  getMapContent: async () => {
    const response = await CustomAxios.get("/api/map");
    return response.data;
  },
  getFaQ: async () => {
    const response = await CustomAxios.get("/api/faqs");
    return response.data;
  },
  getFavoriteContentUser: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/favoris`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getFinishedCoursUser: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/content/view/finishe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getStartedCoursUser: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/content/view/start`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getUserTickets: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/ticket`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getUserGoals: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/objective`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getDomainNameBySubcategory: async () => {
    const response = await CustomAxios.get(`/api/subcategory/domain`);
    return response.data;
  },
  getSubcategorySeledtedByUser: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/client/subcategory`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.map((item) => item.subCategoryId);
  },
  getCommentsUser: async (VideoId) => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/content/comment/${VideoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  postComment: async (courseId, comment) => {
    if (!comment.trim()) {
      return;
    }
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.post(
      `/api/content/store/comment/${courseId}`,
      { comment },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  getFormationBySubcategoryUser: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(
      `/api/content/formation/subcategory`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
  getPodcastBySubcategoryUser: async () => {
    const token = await localStorage.getItem("token");
    const response = await CustomAxios.get(`/api/content/podcast/subcategory`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  getPodcatVideoById: async (podcastId) => {
    const response = await CustomAxios.get(`/api/video/${podcastId}`);
    return response.data;
  },
};

export default ContentApi;
