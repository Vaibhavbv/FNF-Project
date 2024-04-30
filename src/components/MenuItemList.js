import { useDispatch } from "react-redux";
import { useState  } from "react";
import { CDN_URL } from "../Utility/constants";
import { FaStar } from "react-icons/fa";
import { addItem } from "../Utility/cartSlice";

const MenuItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleaAddItem = (item) => {
        dispatch(addItem(item));
    }

    const [expandedItems, setExpandedItems] = useState([]);

    const toggleDescription = (id) => {
        setExpandedItems((prevState) =>
            prevState.includes(id)
            ? prevState.filter((itemId) => itemId !== id)
            : [...prevState, id]
        );
    };

    return (
        <div className="menu-body-card-container">
            {items.map((item) => (
                <div key={item.card.info.id} className="menu-card">
                    <div className="menu-card-left">
                        <h2 className="menu-item-name">{item.card.info.name}</h2>
                        <h3 className="menu-price">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h3>
                        <h4 className="menu-rating"><FaStar /> {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</h4>
                        <h4 className="menu-description">
                            {item.card.info.description && item.card.info.description.length > 0 ? ( // Check if description is available and not empty
                                item.card.info.description.length > 144 ? ( // Check if description length is greater than 144
                                    expandedItems.includes(item.card.info.id) ? // If expanded, show full description
                                    item.card.info.description : item.card.info.description.slice(0, 144) // If not expanded, slice description
                                ) : item.card.info.description // If description is shorter than 144 characters, show full description
                            ) : ("")}
                            {item.card.info.description && item.card.info.description.length > 144 && ( // Check if description is available and longer than 144 characters
                                <button className="dis-btn" onClick={() => toggleDescription(item.card.info.id)}>
                                    {expandedItems.includes(item.card.info.id) ? 'Show Less' : 'Show More'}
                                </button>
                            )}
                        </h4>

                        {/* <h4 className="menu-description" onClick={toggleDescription}>{item.card.info.description}</h4> */}
                    </div>
                    <div className="menu-card-right">
                        <img className="menu-logo" src={CDN_URL + item.card.info.imageId}></img>
                        <button className="menu-btn" onClick={ () => handleaAddItem(item)}>ADD</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuItemList;