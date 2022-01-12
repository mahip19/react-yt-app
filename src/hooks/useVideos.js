import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  //    const [selectedVideo, setSelectedVideo] = useState(null);

  // putting default search term
  useEffect(() => {
    search(defaultSearchTerm);
  }, []);

  const search = async (term) => {
    const get_videos = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(get_videos.data.items);
    // setSelectedVideo(get_videos.data.items[0]);
  };

  return [videos, search];
};

export default useVideos;
