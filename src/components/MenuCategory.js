import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MenuItemList from "./MenuItemList";

const MenuCategory = (data) => {
    
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
    <div className="menu-box">
        <div className="menu-downarrow" onClick={handleClick}>        
            <span className="menu-title">{data.data.title} ({data.data.itemCards.length})</span>
            <div className="menu-downarr">
                <IoIosArrowDown size={23}/>
            </div>
        </div>
        {showItems && <MenuItemList items={data.data.itemCards} />}
    </div>
    )
}
export default MenuCategory;