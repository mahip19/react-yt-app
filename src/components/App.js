import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("chota chattri comedy scenes");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onVideoSelect = (video) => {
    // console.log("from the app", video);
    setSelectedVideo(video);
  };

  const showResults = () => {
    if (videos.length !== 0)
      return (
        <div>
          Showing {videos.length} results <hr />
        </div>
      );
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      {showResults()}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
