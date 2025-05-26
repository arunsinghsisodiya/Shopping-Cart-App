import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";
import { addproductDetails } from "../redux/Slice";

function Home() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const resp = await WebService.getAPICall(WebAPI.productAPI);
      console.log("Response is :", resp);
      console.log("String Response is :", JSON.stringify(resp));
      setProduct(resp?.data?.products || []); // <-- Fix here: use 'products' instead of 'product'
    } catch (error) {
      console.error("Failed to load product:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: "red" }}>
        Home : Product APP :
      </h1>
      <div className="row">
        {product.map((p_details, index) => (
          <div className="col-md-4" key={index}>
            <p>
              <img
                src={p_details.thumbnail}
                alt="Image Not Found"
                height={80}
                width={80}
                className="img-thumbnail"
              />
              <br />
              <br />
              <b>Name : {p_details.title}</b>
              <br />
              <b>Brand : {p_details.brand}</b>
              <br />
              <b>Rating : {p_details.rating}</b>
              <br />
              <b>Price : {p_details.price}</b>
              <br />
              <b>Discount : {p_details.discountPercentage} %</b>
              <br />
              <br />
              <button
                className="btn btn-success"
                onClick={() => dispatch(addproductDetails(p_details))}
              >
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
