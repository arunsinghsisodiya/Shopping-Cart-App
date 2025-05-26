import { useDispatch, useSelector } from "react-redux";
import {
  decrementProductQty,
  incrementProductQty,
  removeProductDetails,
} from "../redux/Slice";
import { useState } from "react";
function Cart() {
  const cartDetails = useSelector((state) => state.mycartDetails.value);
  const dispatch = useDispatch();
  var s = 0;

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "red" }}>
        Cart Product :{" "}
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {cartDetails.map((cart, index) => {
              s = s + cart.qty * cart.product.price;
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{cart.product.id}</td>
                  <td>
                    <img
                      src={cart.product.thumbnail}
                      height={80}
                      width={80}
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{cart.product.title}</td>
                  <td>{cart.product.price}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        dispatch(decrementProductQty(cart.product.id))
                      }
                    >
                      -
                    </button>
                    &nbsp;&nbsp;
                    {cart.qty}
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch(incrementProductQty(cart.product.id))
                      }
                    >
                      +
                    </button>
                  </td>

                  <td>{(cart.product.price * cart.qty).toFixed(3)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch(removeProductDetails(cart.product.id))
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h1>Total Price is : {s.toFixed(2)}</h1>
      </div>
    </div>
  );
}
export default Cart;
