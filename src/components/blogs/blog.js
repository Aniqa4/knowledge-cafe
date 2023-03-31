import "./blog.css"

function Blogs(props){
    const {AuthorName,BlogTitle,BlogCoverImage,PublishDate,ReadTime,AuthorImage}=props.blog;
    console.log(props.blog);
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
                <p> {ReadTime}</p>
            </div>
            <h3>{BlogTitle}</h3>
            <p>Mark as read</p>
        </div>
    )
}

export default Blogs;