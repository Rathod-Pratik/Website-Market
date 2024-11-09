"use client";

import { createContext, useContext, useState, useEffect } from "react"; // Added useEffect
import { useUser } from "@clerk/nextjs";

const AppContext = createContext(null);

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => { // Destructure children directly
  const { user } = useUser();
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
      // setCartLength(data.items?.length || 0); // Set the number of items in cart
      setCartLength(0); // Set the number of items in cart
      setCartData(data.items || []); // Set the cart data itself
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

  return (
    <AppContext.Provider value={{ CartData, CartLength, FetchCartData }}>
      {children} {/* Use children directly */}
    </AppContext.Provider>
  );
};

export default AppProvider;
