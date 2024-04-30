import { MENU_API } from "../Utility/constants";
import { useState, useEffect } from "react";

const useItemMenu = (itemId) => {

    const [itemInfo, setItemInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API + itemId);
        const json = await data.json();
        //console.log(json);
        setItemInfo(json.data);
    };

    return itemInfo;
};

export default useItemMenu;