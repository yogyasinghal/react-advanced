
import {
    CartItem, totalItemQtySelector, totalQtyLimitSelector,
  } from "../store/features/cart/cartSlice";
  import { useAppSelector } from "../store/store";
  
  const Cart = () => {
    // const items=useAppSelector(state=>{
    //   console.log("cart - selector");
    //   return state.cart.items
    // })
    // const totalItemQty=items.reduce((acc:number,item:CartItem)=>{
    //   return acc+1;
    // },0)
    const totalItemQty=useAppSelector(totalItemQtySelector)
    const isExceeded = useAppSelector((state) => totalQtyLimitSelector(state, 5));
    return (
      <div className="border p-3 rounded-md bg-green-50 text-green-500 shadow">
        <div>
          <span>Cart Items Count:</span>{" "}
          <span className="font-bold mx-2">{totalItemQty}</span>
        </div>
        <div>
          <span>Is Exceed: </span> <span>{isExceeded ? "Yes" : "No"}</span>
        </div>
      </div>
    );
  };
  
  export default Cart;