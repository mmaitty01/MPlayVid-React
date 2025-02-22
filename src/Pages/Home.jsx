import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { videos} from "../Constants/constants";
import NavBar from "../Components/NavBar";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredVideos = videos.filter(
    (video) =>
      (selectedCategory === "All" || video.category === selectedCategory) &&
      (video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.uploader.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const visibleVideos = showAll ? filteredVideos : filteredVideos.slice(0, 12);



  return (
    <div className="p-4">
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4  ">
        {visibleVideos.map((video) => (
          <Link to={`/video/${video.url}`} key={video.id}>
            <div className=" rounded p-2 text-center bg-indigo-950/40">
              <img src={video.thumbnail} alt={video.title} className="w-full rounded" />
              <p className="text-sm text-yellow-400">{video.category}</p>
              <p className="mt-2 text-red-500 text-xl font-bold">{video.uploader} - {video.title}</p> 
            </div>
          </Link>
        ))}
      </div>
      {filteredVideos.length > 4 && !showAll && (
        
        <div className="flex justify-center mt-4">
          <button className="p-2 w-80 bg-sky-500 text-white rounded" onClick={() => setShowAll(true)}>
            Load More
          </button>
        </div>
        
      )}
    </div>
  );
};

  export default Home;