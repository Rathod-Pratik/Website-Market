import React, { useContext, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { BiBadgeCheck } from "react-icons/bi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Cartcontext } from "../../../_Context/CartContext";

const ProjectInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {cart,setcart}=useContext(Cartcontext);
  const onAddToCartClick = async () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    setLoading(true);
    setMessage(""); // Clear any previous messages

    try {
      const response = await fetch(`http://localhost:5000/CartData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: product.name,
          description: product.description,
          price: product.price,
          img: product.img,
          id: user.id.toString(),
        })
      });
      console.log(response);
      if (response.ok) {
        setcart(cart=>[...cart,product])
        setMessage("Item added to cart successfully!");
      } else {
        const errorData = await response.json();
        setMessage(`Failed to add item to cart: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      setMessage("Error adding item to cart.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-black">{product.name}</h2>
          <h2 className="text-gray-700 text-[15px] mt-5">
            {product.description}
          </h2>
          <div className="flex gap-2 mt-5 items-center text-[13px]">
            <BiBadgeCheck className="text-green-500 text-2xl h-5 w-5" />
            <span className="text-black">Eligible For Instant Delivery</span>
          </div>
          <h2 className="text-primary text-[32px] mt-5 font-medium">
            {product.price}
          </h2>
          <button
            onClick={onAddToCartClick}
            className={`mt-5 flex gap-2 p-3 bg-primary text-white rounded-lg px-6 hover:bg-blue-700 ${
              loading ? 'cursor-wait' : 'cursor-pointer'
            }`}
            disabled={loading}
          >
            <BsCart2 /> {loading ? 'Adding...' : 'Add to Cart'}
          </button>
          {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="h-[20px] w-[70px] bg-slate-200 animate-pulse "></div>
          <div className="h-[20px] w-[350px] bg-slate-200 animate-pulse "></div>
          <div className="h-[20px] w-[350px] bg-slate-200 animate-pulse "></div>
          <div className="h-[20px] w-[350px] bg-slate-200 animate-pulse "></div>
          <div className="h-[20px] w-[350px] bg-slate-200 animate-pulse "></div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
