import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {CDN_URL} from "../Utility/constants";
import useItemMenu from "../Utility/useItemMenu";
import MenuCategory from "./MenuCategory";

const ItemMenu = () => {
    const {itemId} = useParams();

    const itemInfo = useItemMenu(itemId);

    if(itemInfo === null)  return <Shimmer/>;

    const {
        avgRating,city,cloudinaryImageId,costForTwoMessage,cuisines,id,name,totalRatingsString,veg 
        } =itemInfo?.cards[2]?.card?.card?.info;

    const catogaries = 
        itemInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(catogaries);

    return (
        <div className="menu">
            <div className="menu-header">
                <div>
                   <img className="menu-logo" src={CDN_URL+ cloudinaryImageId}></img>
                </div>
                <div className="menu-header-info">
                    <div>
                       <h2 className="menu-name">{name}</h2>
                    </div>
                    <div>
                        <h3>{cuisines.join(",")}</h3>
                        <h3>{city} {costForTwoMessage}</h3>
                        <h3>{veg ? "Veg" : "Non-Veg"}</h3>
                        <h3>{avgRating} - ({totalRatingsString})</h3>
                    </div>
                </div>
            </div>
            <div className="menu-body">
                <h2 className="gg">Menu</h2>
                {catogaries.map((category) => (
                <MenuCategory key={category?.card?.card.title} data={category?.card?.card}/>
            ))}
            </div>
        </div>
    );
};


export default ItemMenu;