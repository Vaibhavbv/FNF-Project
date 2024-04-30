// import { useState, useEffect } from "react";
// import { HOME_URL } from "./constants";

// const useItemcard = () => {
//     const [listofItems, setlistofItems] = useState([]);
//     const [filteredItems, setfilteredItems] = useState([]);

//     useEffect(() => {
//         fetchData();
//     },[]);

   
//     const fetchData = async () => {
//         const data = await fetch(HOME_URL);
//         const json = await data.json();
//         setlistofItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setfilteredItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     };
//     return listofItems,filteredItems;
// }

// export default useItemcard;