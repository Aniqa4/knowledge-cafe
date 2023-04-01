import "./right-section.css";
function RightSection(props){
    const totalTime=props.totalTime;
    
    return(
        <div>
            <div className="read-time">
                <h5>Spend Time On Read : {totalTime} min</h5>
            </div>
            <div className="bookmarked-blogs">
                <h3>Bookmarked Blogs: 1</h3>
                <div><h3>book name</h3></div>
            </div>
        </div>
    )
}

export default RightSection;