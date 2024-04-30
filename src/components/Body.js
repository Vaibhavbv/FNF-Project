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

import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Shimmer from "./Shimmer";
import { HOME_URL } from "../Utility/constants";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Body = () => {
  const [listofItems, setlistofItems] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [searchText, setSearchText] = useState("Search for restaurants...");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSearch = () => {
            const filteredItems = listofItems.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredItems(filteredItems);
        };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${HOME_URL}?page=${page}`);
    const json = await data.json();

    if (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.length > 0) {
      setlistofItems((prevItems) => [...prevItems, ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
      setfilteredItems((prevItems) => [...prevItems, ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
  };

  return !listofItems || listofItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
            <div className="btn-container">
                    <button className="btn" onClick={() => { setfilteredItems(listofItems.filter(Item => Item.info.avgRating > 4)); }}>Top rated</button>
                    <button className="btn" onClick={() => { setfilteredItems(listofItems.filter(Item => Item.info.sla.deliveryTime < 30)); }}>Less than 30 mins</button>
                    <button className="btn" onClick={() => { setfilteredItems(listofItems.filter(Item => Item.info.veg === true)); }}>Pure Veg</button>
            </div>
                <div className="search">
                    <div className="search-box">
                        <input
                            type="text"
                            className="search-input"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onFocus={() => setSearchText("")}
                        />
                    </div>
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
            </div>

      <InfiniteScroll
        dataLength={filteredItems.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className="item-container">
          {filteredItems.map((item, index) => (
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              key={`${item.info.id}-${index}`}
              to={"/items/" + item.info.id}
            >
              <ItemCard itemData={item} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;