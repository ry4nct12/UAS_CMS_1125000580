import React from "react";
import Welcome from "../components/greeting";

const Home = () => (
    <div>
        <Welcome
            name="John"
            className="blueText"
        ></Welcome>
        <Welcome
            className="greenText"
        ></Welcome>
    </div>
);

export default Home;