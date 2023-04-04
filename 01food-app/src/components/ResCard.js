const ResCard = (props) => {
    const { resName, resImg, resCuisines, resStarRating } = props?.resData;
    return (
        <div className="res-card">
            <img src={`${resImg}`} alt={`${resName}`} draggable="false" />
            <h3>{resName}</h3>
            <h5>{resCuisines.join(", ")}</h5>
            <h5>Rating : {resStarRating}</h5>
        </div>
    )
};

export default ResCard;