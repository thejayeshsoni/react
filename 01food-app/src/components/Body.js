import ResCard from "./ResCard";

import restaurents from "../utils/constant";

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    restaurents.map(restaurent => <ResCard key={restaurent.id} resData={restaurent} />)
                }
            </div>
        </div>
    )
};

export default Body;