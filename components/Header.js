import Link from 'next/link'

function Header() {
    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="header-navg">
                        <span className="menu"> <img src="images/icon.png" alt="" /></span>
                        <ul className="res">
                            <li><Link href='/'><a className="active">HOME</a></Link></li>
                            <li><Link href='/about'><a>ABOUT</a></Link></li>
                            <li><Link href='/'><a>RECIPIES</a></Link></li>
                            <li><Link href='/'><a>NEWS</a></Link></li>
                            <li><Link href='/'><a>CONTACT</a></Link></li>
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
