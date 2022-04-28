import React from "react";
import "./cards.css";

const AddCard = () => {
    return (
        <>
            <div
                className="card px-2 py-3 m-2 shadow bg-body rounded card2"
                style={{}}
            >
                <div className="card-top d-flex px-3">
                    <div className="card-body">
                        <div className="action2">
                            <i class="fas fa-plus"></i>
                        </div>
                        <h4 className="text-center">
                            Create new patient profile
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCard;
