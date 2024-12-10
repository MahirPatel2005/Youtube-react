import './Searchbar.css'

function Searchbar(){

    const Search1icon = [
        {id:1 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
        {id:2 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
        {id:3 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
         {id:4 , url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"}
    ]

    const word = [
        {id:1 , value:'Cook Studio'},
        {id:2 , value:'UX'},
        {id:3 , value:'Case Study'},
        {id:4 , value:'Music'},
        {id:5 , value:'Bangla Lofi'},
        {id:6 , value:'Tour'},
        {id:7 , value:'Saintmartin'},
        {id:8 , value:'Tech'},
        {id:9 , value:'i phone 13'},
        {id:10 , value:'User Interface Design'},
        {id:11 , value:'computer'}


    ]
    return(
        <>
        <div className="Search">

            <div className="mainSearch">

                <div className="search1">
                    <input type="text" className="searchBox" placeholder='Search'/>
                    <div className="searchicon">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
                    </div>
                    <div className="mic">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
                    </div>
                </div>

                <div className="search2">
                    
                    {
                        Search1icon.map((i)=>
                            <div className="icon">
                        <img src={i.url} alt="" />
                    </div>
                        )
                    }
               
                 </div>
            </div>
            <div className="line1"></div>

            <div className="more">
                <div className="word1">All</div>

                {
                    word.map((i)=>
                        // hover
                        <div className="word">{i.value}</div>
                    )

                }
                

            </div>


            <div className="line1"></div>

        </div>

        
        </>
    )
}

export default Searchbar