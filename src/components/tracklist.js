import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import logo from "../assets/logo.svg";
import favicon from "../assets/favicon.ico";
import TracksJSON from "../../content/tracks.json";
import "../assets/style.css";

const Banner = () => {
    return (
        <div className="banner">
            <Link to="/">
                <img
                    src={logo}
                    className="logo"
                    title="Red Hat Enterprise Linux Skills Workshops"
                    alt="Red Hat Enterprise Linux Skills Workshops"
                />
            </Link>
            <h1>Red Hat Enterprise Linux Skills Workshops</h1>
            <p>
                These interactive labs provide you with a pre-configured Red
                Hat® Enterprise Linux® instance to experiment, learn, and see
                how Red Hat can help you solve real-world problems. It runs
	        entirely in your browser, enabling you to learn more about our
	        technology at your own pace.
            </p>
        </div>
    );
};

const TrackList = () => {
    return (
        <div>
            <Helmet>
                <title>Red Hat Enterprise Linux Skills Workshops</title>
                <link rel="icon" type="image/png" href={favicon} />
            </Helmet>
            <Banner />
            <div className="tracks">
                <h2>Available Labs</h2>
                <ul>
                    {TracksJSON.tracks.map((track, index) => (
                        <li>
                            <TrackCard
                                title={track.title}
                                description={track.description}
                                slug={track.slug}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const TrackCard = ({ title, description, slug }) => {
    const trackSlug = slug.split('/').pop();
    console.log(trackSlug);
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <Link to={"tracks/" + trackSlug} className="button">Start lab</Link>
            </div>
        </div>
    );
};

export default TrackList;
