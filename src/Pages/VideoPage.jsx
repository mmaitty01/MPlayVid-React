import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { videos} from "../Constants/constants";
import logo from "../assets/videom.png";

const getRandomVideos = (excludeId, count = 7) => {
  const filteredVideos = videos.filter(video => video.url !== excludeId);
  return filteredVideos.sort(() => 0.5 - Math.random()).slice(0, count);
};

const VideoPage = () => {
    const { id } = useParams();
    const suggestedVideos = getRandomVideos(id);
    
    return (
      <div className="flex flex-col md:flex-row h-screen bg-black text-white">
          <div className="absolute top-2 left-2 p-0 md:p-4">
      <a href="/">
        <img src={logo} className="w-8 md:w-16 object-contain" alt="Logo" />
      </a>
    </div>
      <div className="w-full flex-1 flex justify-center items-center">
        <iframe
          width="80%"
          height="80%"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>     
      </div>
      <div className="w-full h-2/3 p-4 md:w-1/4 md:h-full bg-gray-900 overflow-auto">
        {suggestedVideos.map((video) => (
          <Link to={`/video/${video.url}`} key={video.id} className="block mb-4">
            <div className="flex items-center">
              <img src={video.thumbnail} alt={video.title} className="w-40 h-21 rounded" />
              <div className="ml-2">
                <p className="text-sm font-bold">{video.title}</p>
                <p className="text-xs text-gray-400">{video.category} - {video.uploader}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
  };
  
  export default VideoPage;