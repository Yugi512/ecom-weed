import React from "react";
import HomeFlower from "./HomeFlower";
import HomePrerolls from "./HomePrerolls";
import HomeEdibles from "./HomeEdibles";
import HomeVapes from "./HomeVapes";

const HomePageMain = () => {
    return (
        <div className='main-content'>
            <div className="home-flower">
                <HomeFlower />
            </div>
            <div className="home-prerolls">
                <HomePrerolls />
            </div>
            <div className="home-edibles">
                <HomeEdibles />
            </div>
            <div className="home-vapes">
                <HomeVapes />
            </div>
        </div>
    )
}


export default HomePageMain;