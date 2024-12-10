// import './Sidebar.css'

// function Sidebar(){

//     const part1 = [
//         {id:1, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true", value: 'Home'},
//         {id:2, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true", value: 'Explores'},
//         {id:3, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true", value: 'Shorts'},
//         {id:4, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true", value: 'Subscription'}
//     ]

//     const part2 = [
       
//         {id:1, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true", value: 'Library'},
//         {id:2, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true", value: 'History'},
//         {id:3, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true", value: 'Your videos'},
//         {id:4, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true", value: 'Watch later'},
//         {id:5, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true", value: 'Liked videos'},
//         {id:6, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true", value: 'Show more'}
//     ]

//     const part3 = [
       
//         {id:1, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true", value: 'Nadir on The Go'},
//         {id:2, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", value: 'Coke Studio Bangla'},
//         {id:3, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true", value: 'MKBHD'},
//         {id:4, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true", value: 'Figma'},
//         {id:5, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true", value: 'ATC Android ToTo C...'},
//         {id:6, url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true", value: 'Alux.com'}
//     ]

//     return(
//         <>
//         <div className="Side">
//             <div className="logo">
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" className="menu" />
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" id="logo" />
//             </div>

//         <div className="part1">

//             {
//                 part1.map((i)=>
//                     <div className="navigation">
//                 <img src={i.url} alt="" className="icon" />
//                 <div className="value">{i.value}</div>
//             </div>
//                  )
//             }
//         </div>

//         <div className="line"></div>

//         <div className="part2">

//             {
//                     part2.map((i)=>
//                         <div className="navigation">
//                     <img src={i.url} alt="" className="icon" />
//                     <div className="value">{i.value}</div>
//                 </div>
//                     )
//             }
//         </div>

//         <div className="line"></div>

//         <div className="part3">

//              <div className="sub">SUBSCRIPTION</div>
            
//         {
//                     part3.map((i)=>
//                         <div className="navigation">
//                     <img src={i.url} alt="" className="icon" />
//                     <div className="value">{i.value}</div>
//                 </div>
//                     )
//             }
//         </div>
        





//         </div>
//         </>
//     )
// }

// export default Sidebar




import { useState } from 'react'
import '../App.css'
import Logo from '../assets/Youtube logo.png'

function Slide() {


    return (
        <>
            <div className="main-container">
                <div className="top">
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt='3line' />
                    <img src={Logo} alt='Logo' />
                </div>

                <div className="container">
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt=' ' />
                        <div className="text">Home</div>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt=' ' />
                        <div className="text">Explore</div>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt=' ' />
                        <div className="text">Shorts</div>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                </div>

                <hr></hr>

                <div className="Box-cont">
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt=' ' />
                        <div className="text">Home</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt=' ' />
                        <div className="text">Explore</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt=' ' />
                        <div className="text">Shorts</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt=' ' />
                        <div className="text">Shorts</div>
                    </div>
                    <div className="box">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                </div>


                <hr></hr>

                
                <div className="bottom">
                    <div className="name">Subscriptions</div>

                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                    <div className="sub">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt=' ' />
                        <div className="text">Subscriptions</div>
                    </div>
                   </div>
            </div>
        </>

    )


}

export default Slide;