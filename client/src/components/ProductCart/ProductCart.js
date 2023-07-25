import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaHeart, FaLink, FaCartPlus } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
import "./ProductCart.css";

const ProductCart = (props) => {
  const p = props.product;
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };
  
  const moreIcon = {
    width: "30px",
    height: "30px",
    color: "#e94560",
  };

  return (
    <div className="col-8 col-sm-3  ProductCont mb-2 mt-2" key={p?._id}>
      <div className="product">
        <div className="">
          {/* <span className="discount">% Off</span> */}
          <div className="proImgCont">
          <img
            src={`/api/v1/product/product-photo/${p?._id}`}
            alt=""
            className="proImg"
          />
           <div className="product-like">
            <label>{count}</label> <br />
            <i
                            className="fa-regular fa-heart"
                            onClick={increment}
                          >  
            <FaHeart onClick={increment} />
            </i>
          </div>
          </div>
         
         
        </div>
        <div className="">
          <h4 style={{ textAlign: "center" }}>{p?.name}</h4>
          <div
            className="rate"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactStars
              edit={false}
              color={"rgba(20, 20, 20, 0.1)"}
              activeColor={"#FFB319"}
              size={window.innerWidth < 600 ? 15 : 20 }
              value={p?.ratings}
              isHalf={true}
            />
            <h3
              style={{
                margin: "6px",
                fontWeight: "bold",
                textDecoration: "underline red solid yellow",
              }}
            >
              {p?.ratings?.toFixed(1)}
            </h3>
          </div>
          <h6>{`Review ${p?.numOfReviews}`}</h6>
          <div className="price">
            <h4>${p?.price}.00 </h4>
            <abbr title="More About">
              <button onClick={() => navigate(`/product/${p?.slug}`)}>
                <FaLink />
              </button>
            </abbr>
          </div>
          <abbr title="add to cart">
            <button
              className="addToCartBtn"
              onClick={() => {
                setCart([...cart, p]);
                localStorage.setItem("cart", JSON.stringify([...cart, p]));
                toast.success("Item Added to cart");
              }}
            >
              <FaCartPlus />
            </button>
          </abbr>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
