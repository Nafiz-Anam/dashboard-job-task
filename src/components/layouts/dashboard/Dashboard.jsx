import React from "react";
import Profile from "../../../pages/profile/Profile";
import "./dashboard.css";

const Dashboard = () => {
    return (
        <div>
            {/* wrapper */}
            <div className="wrapper">
                {/* search starts */}
                <div className="search">
                    <form className="search-form d-flex">
                        <label>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                            <input
                                type="search"
                                id="site-search"
                                className="search-input"
                                placeholder="Global Search"
                                autocomplete="on"
                            />
                        </label>
                        <i class="far fa-bell notify"></i>
                    </form>
                </div>
                {/* search ends */}

                {/* sidebar starts */}
                <aside className="sidebar">
                    {/* sidebar inner */}
                    <div className="sidebar_inner">
                        {/* person block*/}
                        <div className="person">
                            <img
                                src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/profile.png?raw=true"
                                alt="profile_picture"
                                className="profileImg"
                            />
                            <div className="description">
                                <span className="descriptionName">
                                    Sierra Ferguson
                                </span>
                                <span className="descriptionMail">
                                    {" "}
                                    s.ferguson@gmail.com
                                </span>
                            </div>
                        </div>
                        {/* navbar*/}
                        <nav className="navbar">
                            <ul>
                                <li className="nav-item">
                                    <a href="">
                                        <div className="menu-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z"
                                                    stroke="#C2CFE0"
                                                    stroke-width="1.4"
                                                />
                                            </svg>
                                            <span className="nav-label">
                                                Dashboard
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="">
                                        <div className="menu-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.49996 3.2H16.6666C16.7384 3.2 16.8 3.2616 16.8 3.33333V8.33333C16.8 8.40507 16.7384 8.46667 16.6666 8.46667H2.49996C2.42823 8.46667 2.36663 8.40507 2.36663 8.33333V3.33333C2.36663 3.2616 2.42823 3.2 2.49996 3.2ZM2.49996 11.5333H16.6666C16.7384 11.5333 16.8 11.5949 16.8 11.6667V16.6667C16.8 16.7384 16.7384 16.8 16.6666 16.8H2.49996C2.42823 16.8 2.36663 16.7384 2.36663 16.6667V11.6667C2.36663 11.5949 2.42823 11.5333 2.49996 11.5333Z"
                                                    stroke="#C2CFE0"
                                                    stroke-width="1.4"
                                                />
                                            </svg>

                                            <span className="nav-label">
                                                Enquiries
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="">
                                        <div className="menu-icon">
                                            <i
                                                class="fa-regular fa-user"
                                                style={{ color: "#c2cfe0" }}
                                            ></i>

                                            <span className="nav-label px-2">
                                                Profiles
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="">
                                        <div className="menu-icon">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.49996 4.03325H17.5C17.5717 4.03325 17.6333 4.09485 17.6333 4.16659V15.8333C17.6333 15.905 17.5717 15.9666 17.5 15.9666H2.49996C2.42823 15.9666 2.36663 15.905 2.36663 15.8333V4.16659C2.36663 4.09485 2.42823 4.03325 2.49996 4.03325Z"
                                                    stroke="#C2CFE0"
                                                    stroke-width="1.4"
                                                />
                                                <rect
                                                    x="6.5"
                                                    y="3.33325"
                                                    width="1.16667"
                                                    height="13.3333"
                                                    fill="#C2CFE0"
                                                />
                                                <rect
                                                    x="12.3334"
                                                    y="3.33325"
                                                    width="1.16667"
                                                    height="13.3333"
                                                    fill="#C2CFE0"
                                                />
                                            </svg>

                                            <span className="nav-label">
                                                Payments
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="">
                                        <div className="menu-icon">
                                            <svg
                                                width="14"
                                                height="4"
                                                viewBox="0 0 14 4"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2.00004 0.333252C1.08337 0.333252 0.333374 1.08325 0.333374 1.99992C0.333374 2.91658 1.08337 3.66658 2.00004 3.66658C2.91671 3.66658 3.66671 2.91658 3.66671 1.99992C3.66671 1.08325 2.91671 0.333252 2.00004 0.333252ZM12 0.333252C11.0834 0.333252 10.3334 1.08325 10.3334 1.99992C10.3334 2.91658 11.0834 3.66658 12 3.66658C12.9167 3.66658 13.6667 2.91658 13.6667 1.99992C13.6667 1.08325 12.9167 0.333252 12 0.333252ZM7.00004 0.333252C6.08337 0.333252 5.33337 1.08325 5.33337 1.99992C5.33337 2.91658 6.08337 3.66658 7.00004 3.66658C7.91671 3.66658 8.66671 2.91658 8.66671 1.99992C8.66671 1.08325 7.91671 0.333252 7.00004 0.333252Z"
                                                    fill="#C2CFE0"
                                                />
                                            </svg>
                                            <span className="nav-label">
                                                Settings
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="contact shadow-sm p-4 rounded text-center">
                                <h6>Need our help?</h6>
                                <button className="btn btn-info m-3">Contact us</button>
                            </div>
                        </nav>
                    </div>
                    {/* inner ends */}
                </aside>
                {/* sidebar ends */}

                <Profile />
                
            </div>
            {/* wrapper */}
        </div>
    );
};

export default Dashboard;
