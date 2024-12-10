// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App







import { useEffect, useState } from "react";
import "./App.css";

function Main() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("explore"); 
    const [userInput, setUserInput] = useState("");

    const API_KEY = "AIzaSyDTP_J-0EKzPEEFkbb6se55Lf_ov0iIHKw";

 
    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
                        searchQuery
                    )}&maxResults=10&key=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch videos");
                }

                const data = await response.json();

                const transformedVideos = data.items.map((item) => ({
                    title: item.snippet.title,
                    channel: item.snippet.channelTitle,
                    views: "N/A", 
                    date: new Date(item.snippet.publishedAt).toLocaleDateString(),
                    thumbnail: item.snippet.thumbnails.medium.url,
                }));

                setVideos(transformedVideos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [searchQuery]); 
    const handleSearch = () => {
        if (userInput.trim()) {
            setSearchQuery(userInput);
        }
    };

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="all">
            <div className="navbar">
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)} 
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt="Search"
                        />
                    </button>
                    <button className="mic-btn">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                            alt="Mic"
                        />
                    </button>
                </div>
            </div>

            <div className="main-content">
                <div className="row">
                    {videos.map((video, index) => (
                        <div className="video" key={index}>
                            <div className="photo-container">
                                <img
                                    src={video.thumbnail}
                                    alt="Video Thumbnail"
                                    onError={(e) =>
                                        (e.target.src =
                                            "https://via.placeholder.com/150")
                                    }
                                />
                            </div>
                            <div className="cpy">
                                <div className="title">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                <div className="cpy3">
                                    <div className="views">{video.views}</div>
                                    <div className="date">{video.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;