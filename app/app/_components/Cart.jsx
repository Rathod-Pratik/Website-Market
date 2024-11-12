import React, { useContext } from "react";
import AppContext from "../_Context/CreateContext";
import Link from "next/link";
const Cart = () => {
  const value = useContext(AppContext);
  const { CartData, CartLength,setOpenCart } = value;

  return (
    <div className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md absolute mx-10 right-10 top-12 p-5 border shadow-sm overflow-y-auto scrollbar">
  <div className="mt-4 space-y-6 max-h-80">
    <ul className="space-y-4">
      {CartData.map((item, index) => (
        <li key={index} className="flex items-center gap-4">
          <img
            src={item.img}
            alt=""
            className="size-16 rounded object-cover"
          />
          <div>
            <h3 className="text-sm text-gray-900 line-clamp-1">{item.name}</h3>
            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt className="inline">{item.price}$</dt>
              </div>
            </dl>
          </div>
        </li>
      ))}
      <div className="space-y-4 text-center">
        <Link

        onClick={()=>setOpenCart(false)}
          href="/cart"
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          View my cart ({CartLength})
        </Link>
        <a onClick={()=>setOpenCart(false)}
          href="#"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </ul>
  </div>
</div>

  );
};

export default Cart;
