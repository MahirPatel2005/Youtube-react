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

//     y