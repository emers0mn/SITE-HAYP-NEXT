import React from "react";

export const HomeFooterPage = () => {
    return(
        <>
        <footer className="footer">
            <div className="container lg-container">
                <div className="social-icons">
                <ul className="text-center p-0 m-0 m-auto">
                    <li>
                    <a target="_blank" href="https://www.instagram.com/hp_internet/">
                        <img
                        src="./assets/images/icons/assets_instagram.png"
                        alt="Instagram"
                        className="img-fluid"
                        />
                    </a>
                    </li>
                    <li>
                    <a target="_blank" href="https://www.facebook.com/HPTelecom">
                        <img
                        src="./assets/images/icons/assets_facebook.png"
                        alt="Facebook"
                        className="img-fluid"
                        />
                    </a>
                    </li>
                    {/* <li>
                    <a href="#">
                        <img
                        src="./assets/images/icons/assets_twitter.png"
                        alt="image"
                        className="img-fluid"
                        />
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <img
                        src="./assets/images/icons/assets_linkedin.png"
                        alt="image"
                        className="img-fluid"
                        />
                    </a>
                    </li> */}
                    {/* <li>
                    <a href="#">
                        <img
                        src="./assets/images/icons/assets_e-mail.png"
                        alt="image"
                        className="img-fluid"
                        />
                    </a>
                    </li> */}
                </ul>
                </div>
            </div>
        </footer>
        </>
    )
}