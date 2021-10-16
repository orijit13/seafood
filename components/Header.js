import Link from 'next/link'
import { useRouter } from 'next/router'

const menu = [
    { title: 'HOME', path: '/' },
    { title:'ABOUT', path:'/about' },
    { title:'RECIPIES', path:'/recipies' },
    { title:'NEWS', path:'/news' },
    { title:'CONTACT', path:'/contact' }

]

function Header() {
    const router = useRouter();

    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="header-navg">
                        <span className="menu"> <img src="images/icon.png" alt="" /></span>
                        <ul className="res">
                            {
                               menu.map((item,index)=> {
                                   return(
                                    <li key={index}><Link href={item.path}><a className={`cursor-pointer ${
                                        router.pathname === item.path
                                          ? 'text-blue-500 active'
                                          : 'hover:bg-gray-900 hover:text-blue-500'
                                      }`}>{item.title}</a></Link></li>
                                   )
                               })
                            }
                        </ul>

                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <button type="submit" className="searchBtn"></button>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </>
    )
}

export default Header
