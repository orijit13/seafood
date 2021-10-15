

function Header() {
    return (
        <>
          <div className="header-main">
            <div className="container">
                    <div className="header-navg">
                        <span className="menu"> <img src="images/icon.png" alt="" /></span>
                        <ul className="res">
                            <li><a className="active" href="index.html">HOME</a></li>
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="recipies.html">RECIPIES</a></li>
                            <li><a href="news.html">NEWS</a></li>
                            <li><a href="contact.html">CONTACT</a></li>
                        </ul>

                    </div>
                    <div className="search">
                        <input type="text" defaultValue="Search" />
                        <input type="submit" defaultValue="" />
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </>
    )
}

export default Header
