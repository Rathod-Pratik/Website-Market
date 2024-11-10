"use client";

import { useState, useEffect } from "react"; // Added useEffect
import { useUser } from "@clerk/nextjs";
import AppContext from './CreateContext'


export const AppProvider = ({ children }) => { // Destructure children directly
  const { user } = useUser();
  const [AddToCart,SetAddToCart]=useState(false);
  const [CartLength, setCartLength] = useState(0);
  
  const [CartData, setCartData] = useState([]);
  const host = "http://localhost:5000";

 
  const FetchCartData = async () => {
    if (!user?.id) return; // Ensure user is defined before fetching data

    try {
      const response = await fetch(`${host}/CartData/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      console.log(data);
       setCartLength(data?.length); 
      setCartData(data); 
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  // Fetch cart data when the user logs in or updates
  useEffect(() => {
    if (user) {
      FetchCartData();
    }
  }, [user]);
  const IncreaseCartLength = () => {
    setCartLength((prevLength) => prevLength + 1);
  };
  return (
    <AppContext.Provider value={{setCartData,AddToCart,SetAddToCart, CartData, CartLength, FetchCartData ,IncreaseCartLength}}>
      {children} 
    </AppContext.Provider>
  );
};

export default AppProvider;
