import React from "react";

const Preloader = (props) => {
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Preloader;