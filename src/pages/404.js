import * as React from "react";
import "../assets/style.css";

const NotFoundPage = () => {
    if (typeof window !== "undefined") {
        window.location = "/";
    }

    return null;
};

export default NotFoundPage;
