import axios from "axios";

const API = axios.create({
  baseURL: "https://visionart-631l.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) =>
  await API.post("/generateImage/", data);
