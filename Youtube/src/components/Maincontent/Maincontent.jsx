import { useEffect, useState } from 'react';

import './Maincontent.css';

function Maincontent(){

    // // 
    // const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     // Fetch data from the server
    //     axios.get("AIzaSyDTP_J-0EKzPEEFkbb6se55Lf_ov0iIHKw")
    //         .then(response => {
    //             setVideos(response.data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []);

    // return(
    //     <>
    //     <div className="Main">
    //         <div className="carditems">
    //             <div className="card">
    //                 <div className="thumbnailimg">
    //                     <img className="thumimg" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" alt="" />
    //                 </div>
    //                 <div className="videodetail">
    //                     <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" className="chennelicon" />
    //                     <div className="decription">Bulbuli I Coke Studio Bangla I
    //                     Season One I Ritu X Nandita </div>
    //                 </div>

    //                     <div className="channel">Coke Studio Bangla </div>
    //                     <div className="views">1.5M views • 2 days ago</div>
                    
    //             </div>

           
    //             {videos.map(video => (
    //                 <div key={video.id}>
    //                     <img src={video.thimg} alt={video.description}  />
    //                     <div>
    //                         {video.chicon && (
    //                             <img src={video.chicon} alt={video.channel} />
    //                         )}
    //                         <span>{video.channel}</span>
    //                     </div>
    //                     <p>{video.description}</p>
    //                     <span>{video.viwes}</span>
    //                 </div>
    //             ))}
            

    //     {
    //         videodetail.map((i) =>
    //             <div className="card" key={i.id}>
    //         <div className="thumbnailimg">
    //             <img className="thumimg" src={i.thimg} alt="" />
    //         </div>
    //         <div className="videodetail">
    //             <img src={i.chicon} alt="" className="chennelicon" />
    //             <div className="decription">{i.description} </div>
    //         </div>

    //             <div className="channel">{i.channel}</div>
    //             <div className="views">{i.viwes}</div>
            
    //     </div>
    //         )
    //     }

    //             <div className="card">
    //                 <div className="thumbnailimg">
    //                     <img className="thumimg" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" alt="" />
    //                 </div>
    //                 <div className="videodetail">
    //                     <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" className="chennelicon" />
    //                     <div className="decription">Bulbuli I Coke Studio Bangla I
    //                     Season One I Ritu X Nandita </div>
    //                 </div>

    //                     <div className="channel">Coke Studio Bangla </div>
    //                     <div className="views">1.5M views • 2 days ago</div>
                    
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            const API_KEY = 'AIzaSyDTP_J-0EKzPEEFkbb6se55Lf_ov0iIHKw'; // Replace with your API key
            const searchQuery = 'samay raina video '; // Replace with your desired search query
            const maxResults = 20;

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResults}&key=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }

                const data = await response.json();

                // Transform API response to match your existing format
                const transformedVideos = data.items.map((item) => ({
                    title: item.snippet.title,
                    channel: item.snippet.channelTitle,
                    views: 'N/A', // YouTube API v3 does not provide views in the search endpoint; fetch details via videos.list if needed
                    date: new Date(item.snippet.publishedAt).toLocaleDateString(),
                    thumbnail: item.snippet.thumbnails.medium.url,
                }));

                setVideos(transformedVideos);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="all">
            <div className="main-content">
                <div className="row">
                    {videos.map((video, index) => (
                        <div className="video" key={index}>
                            <div className="photo-container">
                                <img 
                                    src={video.thumbnail} 
                                    alt="Video Thumbnail" 
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
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

export default Maincontent