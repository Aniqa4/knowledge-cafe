import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./left-section.css"

function LeftSection(props){
    const {AuthorName,BlogTitle,BlogCoverImage,PublishDate,ReadTime,AuthorImage}=props.blog;
    const totalTimeSpent=props.totalTimeSpent;
    const bookmarkBlogs=props.bookmarkBlogs;

    return(
        <div className="blog">
            <img src={BlogCoverImage} />
            <div className="all-data">
                <div className="data">
                    <img src={AuthorImage}/>
                    <ul style={{listStyle:"none",margin:"0px"}}>
                        <li style={{fontWeight:"bold"}}>{AuthorName}</li>
                        <li>{PublishDate}</li>
                    </ul>
                </div>
                <p>{ReadTime}min read&nbsp;&nbsp;&nbsp;<FontAwesomeIcon onClick={()=>bookmarkBlogs(BlogTitle)} icon={faBookmark}/></p>
            </div>
            <h3>{BlogTitle}</h3>
            <p onClick={()=>totalTimeSpent(ReadTime)}>Mark as read</p>
        </div>
    )
}

export default LeftSection;