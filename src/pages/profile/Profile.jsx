import React from "react";
import AddCard from "../../components/cards/AddCard";
import Cards from "../../components/cards/Cards";
import "./profile.css";

const Profile = () => {
    return (
        <div className="container p-4">
            <h3 className="title">My patients profiles</h3>
            <div className="row py-5">
                <div className="col-lg-3">
                    <Cards />
                </div>
                <div className="col-lg-3">
                    <Cards />
                </div>
                <div className="col-lg-3">
                    <Cards />
                </div>
                <div className="col-lg-3">
                    <AddCard />
                </div>
            </div>
            <hr />
            <div className="row py-5">
                <div className="col-lg-3">
                    <p className="avail">
                        Available patients profile{" "}
                        <span className="numm">
                            {" "}
                            <b>3 of 5</b>{" "}
                        </span>
                    </p>
                    <div className="progress my-2">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "60%" }}
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <div className="col-lg-9 text-end">
                    <button className="btn upgrade">Upgrade</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
