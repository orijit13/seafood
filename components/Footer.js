function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-bg">
                    <div className="container">
                    <div className="footer-main">
                        <div className="footer-top">
                        <i> </i>
                        <span className="ver-line"> </span>
                        </div>
                        <div className="footer-bottom">
                        <div className="email">
                            <input
                            type="text"
                            defaultValue="Email"

                            />
                        </div>
                        <div className="sign-up">
                            <input type="submit" defaultValue="Subscribe" />
                        </div>
                        <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="layout">
                        <p>{new Date().getFullYear()} <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Sea Foods. All rights reserved.</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Footer