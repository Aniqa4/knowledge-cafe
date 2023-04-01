import "./right-section.css";


function RightSection(props){
    const totalTime=props.totalTime;
    const bookmark=props.bookmark;
    
    return(
        <div className="right-section">
            <div className="read-time">
                <h5>Spend Time On Read : {totalTime} min</h5>
            </div>
            <div className="bookmarked-blogs">
                <h3>Bookmarked Blogs : {bookmark.length}</h3>
                <div>
                {
                    bookmark.map((title,index)=>
                        <h5 key={index.toString()} className="titles">{title}</h5>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default RightSection;