import "./header.css";

function Header(){
    return(
        <div className="header">
            <div>
                <h1>Knowledge Cafe</h1>
            </div>
            <div>
                <ul className="nav">
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;