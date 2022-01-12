import axios from "axios";
const KEY = "AIzaSyBQvRGUpYZrv7g398u4PA32W2rQ0vqxcDk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
