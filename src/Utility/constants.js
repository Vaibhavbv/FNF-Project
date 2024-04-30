import logo from '../../images/FNF logo.png';

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
export const LOGO_URL = logo;
export const HOME_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const UPDATE_URL = "https://www.swiggy.com/dapi/restaurants/list/update";
export const MENU_API ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

// import ItemCard from "../components/ItemCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { HOME_URL , UPDATE_URL} from "../Utility/constants";
// import { Link } from "react-router-dom";


// const Body = () => {

//     const [listofItems, setlistofItems] = useState([]);
//     const [filteredItems, setfilteredItems] = useState([]);
//     const [searchText , setSearchText] = useState("Search for restaurants...");
//     const [isLoading, setIsLoading] = useState(false);

//     const fetchData = async (url) => {
//         setIsLoading(true);
//         const response = await fetch(url, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             // Add necessary parameters here
//           }),
//         });
//         const data = await response.json();
//         setlistofItems((prevItems) => [...prevItems, ...data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         fetchData(HOME_URL);
//         console.log(HOME_URL);
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     },[]);

//     const handleScroll = () => {
//         // Check if user has scrolled to the bottom of the page
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             fetchData(UPDATE_URL); // Call fetchData function to load more data
//         }
//     };

//     // const fetchData = async () => {
//     //     setIsLoading(true);
//     //     const data = await fetch(HOME_URL);
//     //     const json = await data.json();
//     //     setlistofItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     //     setfilteredItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     //     setIsLoading(false);
//     // };

//     return !listofItems || listofItems.length === 0 ? <Shimmer/> :(
//         <div className="body">
//             {/* <div className="line-container">
//                     <h2 className="h2-line">Restaurants with online food delivery in Bhopal</h2>
//             </div> */}
//             <div className="search-container">
//                 <div className="btn-container">
//                     <button className= "btn"
//                         onClick={() => {
//                             const fl = listofItems.filter(
//                                 (Item) => Item.info.avgRating > 4
//                             );
//                             setfilteredItems(fl);
//                         }}
//                     > Top rated
//                     </button>
//                     <button className="btn"
//                         onClick={() => {
//                             const fl = listofItems.filter(
//                                 (Item) => Item.info.sla.deliveryTime < 30
//                             );
//                             setfilteredItems(fl);
//                         }}
//                     > Less than 30 mins
//                     </button>
//                     <button className= "btn"
//                         onClick={() => {
//                             const fl = listofItems.filter(
//                                 (Item) => Item.info.avgRating > 4
//                             );
//                             setfilteredItems(fl);
//                         }}
//                     > Pure Veg
//                     </button>
//                 </div>
//                 <div className="search">
//                     <div className="search-box">
//                         <input
//                             type="text"
//                             className="search-input"
//                             value={searchText}
//                             onChange={(e) => setSearchText(e.target.value)}
//                             onFocus={() => setSearchText("")}
//                         /> 
//                     </div>
//                     <button
//                         className="search-btn"
//                         onClick={() => {
//                             const flitem = listofItems.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
//                             setfilteredItems(flitem);
//                         }}
//                     > Search
//                     </button>
//                 </div>
//             </div>
            
//             <div className="item-container">
//                 {filteredItems.map((item) => (
//                   <Link 
//                     style={{
//                         textDecoration: 'none',
//                         color: '#000',
//                     }}
//                     key={item.info.id} to={"/items/" + item.info.id}><ItemCard itemData={item}/></Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;

// import ItemCard from "../components/ItemCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { HOME_URL } from "../Utility/constants";
// import { Link } from "react-router-dom";

// const Body = () => {
//     const [listofItems, setlistofItems] = useState([]);
//     const [filteredItems, setfilteredItems] = useState([]);
//     const [searchText, setSearchText] = useState("Search for restaurants...");

//     useEffect(() => {
//         fetchData();
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleScroll = () => {
//         // Logic to check if user has scrolled to bottom
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//             // Fetch more data here
//             fetchMoreData();
//         }
//     };

//     // useEffect(() => {
//     //     // Logic to fetch more data when new ID arrives
//     //     fetchMoreData();
//     // }, [listofItems]);

//     const fetchData = async () => {
//         const response = await fetch(HOME_URL);
//         const json = await response.json();
//         setlistofItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setfilteredItems(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     };

//     // const fetchMoreData = async () => {
//     //     // API call to fetch more data
//     //     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/update');
//     //     const newData = await response.json();

//     //     // Update the list
//     //     setlistofItems([...listofItems, ...newData.cards[0].card.card.gridElements.infoWithStyle.restaurants]);
//     // };

//     const fetchMoreData = async () => {
//         try {
//             const data = {
//                 pageOffset: {
//                     nextOffset: "COVCELQ4KIDIse+N4LX4dDCnEw=="
//                 }
//             };
    
//             const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(data)
//             });
    
//             const responseData = await response.json();
//             const additionalItems = responseData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
//             // Update existing list or filtered list with additionalItems
//             setlistofItems(prevItems => [...prevItems, ...additionalItems]);
//             setfilteredItems(prevItems => [...prevItems, ...additionalItems]);
//         } catch (error) {
//             console.error("Error fetching more data:", error);
//         }
//     };    

//     const handleSearch = () => {
//         const filteredItems = listofItems.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
//         setfilteredItems(filteredItems);
//     };

//     return !listofItems || listofItems.length === 0 ? <Shimmer /> : (
//         <div className="body">
//             <div className="search-container">
//                 <div className="btn-container">
//                     <button className="btn" onClick={() => { setfilteredItems(listofItems.filter(Item => Item.info.avgRating > 4)); }}>Top rated</button>
//                     <button className="btn" onClick={() => { setfilteredItems(listofItems.filter(Item => Item.info.sla.deliveryTime < 30)); }}>Less than 30 mins</button>
//                     <button className="btn" onClick={() => { setfilteredItems(listofItems.filter(Item => Item.info.veg === true)); }}>Pure Veg</button>
//                 </div>
//                 <div className="search">
//                     <div className="search-box">
//                         <input
//                             type="text"
//                             className="search-input"
//                             value={searchText}
//                             onChange={(e) => setSearchText(e.target.value)}
//                             onFocus={() => setSearchText("")}
//                         />
//                     </div>
//                     <button className="search-btn" onClick={handleSearch}>Search</button>
//                 </div>
//             </div>

//             <div className="item-container">
//                 {filteredItems.map((item) => (
//                     <Link
//                         style={{
//                             textDecoration: 'none',
//                             color: '#000',
//                         }}
//                         key={item.info.id} to={"/items/" + item.info.id}><ItemCard itemData={item} /></Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
