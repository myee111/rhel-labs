import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import logo from "../assets/logo.svg";
import favicon from "../assets/favicon.ico";
import "../assets/style.css";

const Header = () => {
    return (
        <div className="header">
            <img
                src={logo}
                className="logo"
                title="Red Hat Enterprise Linux Skills Workshops"
                alt="Red Hat Enterprise Linux Skills Workshops"
            />
            <Link to="/">Back to all labs</Link>
        </div>
    );
};

const Track = ({ pageContext }) => {
    let trackURL = `https://play.instruqt.com/embed/${pageContext.track.slug.replace(
        `/`,
        `/tracks/`
    )}`;
    return (
        <div class="track">
            <Helmet>
                <title>{pageContext.track.title} - Red Hat Enterprise Linux Skills Workshops</title>
                <link rel="icon" type="image/png" href={favicon} />
            </Helmet>
            <Header />
            <iframe
                title={pageContext.track.title}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                src={trackURL}
            ></iframe>
        </div>
    );
};

export default Track;
