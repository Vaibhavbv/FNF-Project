import { CDN_URL } from "../Utility/constants";

const ItemCard = (props) => {
    const {itemData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = itemData?.info;

    return (
        <div className="item-card">
            <img className="item-logo" src={CDN_URL+ cloudinaryImageId}></img>
            <div className="item-info">
                <h2>{name}</h2>
                <em>{cuisines.join(', ')}</em>
                <h4>{costForTwo}</h4>
                <h4>Rating-{avgRating}</h4>
                <h4>{sla?.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default ItemCard;