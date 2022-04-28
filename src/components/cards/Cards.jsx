import React from "react";
import "./cards.css";

const Cards = () => {
    return (
        <>
            <div
                className="card px-2 py-3 m-2 shadow bg-body rounded"
                
            >
                <div className="card-top d-flex px-3">
                    <div className="days">2d ago</div>
                    <div className="action">
                        <button className="btn p-0">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>
                <div className="d-flex py-2 justify-content-center">
                    <img
                        src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/profile.png?raw=true"
                        className="card-img-top card-img-circle"
                        alt="..."
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Nafiz Anam</h5>
                    <p className="status pb-3 pt-1">Active</p>
                    <div className="progress">
                        <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <p className="storage pt-3">Storage: 45%</p>
                </div>
            </div>
        </>
    );
};

export default Cards;
