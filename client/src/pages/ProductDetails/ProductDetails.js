import React, { useState, useEffect } from "react";
import { Modal, Rate, Input } from "antd";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
import { useCart } from "../../context/cart";
import { useParams } from "react-router-dom";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState("");
  const [id, setId] = useState("");
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      setId(data?.product?._id);
      getSimilarProduct(data?.product._id, data?.product?.category?._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("comment", review);
      productData.append("rating", rating);

      if (review) {
        const { data } = axios.put(
          `/api/v1/product/update-product/${id}/review`,
          productData,
          id
        );
        if (data?.success) {
          toast.error(data?.message);
        } else {
          toast.success("Review Added Successfully");
        }
      } else {
        toast.error("Review Must Have More Than 3 characters");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Layout>
      <div className="container product-details">
        <h3 className="text-center">Product Details</h3>
        <hr />
        <div className="row">
          <div className="col-md-6 ">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
            />
          </div>
          <div className="col-md-6 product-details-info">
            <div className="d-flex">
              <h6 className="p-2">Name:</h6>
              <h6 className="p-2">{product?.name}</h6>
            </div>
            <div className="d-flex">
              <h6 className="p-2">Price:</h6>
              <h6 className="p-2">
                {product?.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h6>
            </div>
            <div className="d-flex">
              <h6 className="p-2">Category:</h6>
              <h6 className="p-2">{product?.category?.name}</h6>
            </div>
            <div className="d-flex">
              <h6 className="p-2"> Description:</h6>
              <h6 className="p-2">{product?.description}</h6>
            </div>
            <button
              className="addToCartBtnDetail"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added to cart");
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        <hr />
        <div className="pt-5 pb-5">
          <h4 className="text-center mb-4">
            <u>Clients Reviews</u>
          </h4>
          <div className="reviewMainCont">
            {product?.reviews?.map((r, index) => (
              <div key={index} className="reviewCont border shadow">
                <div className="imgMainCont">{r?.name[0]}</div>
                <div className="nameCommentCont">
                  <p
                    style={{
                      margin: " 0 auto",
                      marginLeft: "0px",
                      lineHeight: "16px",
                    }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {r?.name}{" "}
                    </span>{" "}
                    <br />
                    {r?.comment}
                  </p>
                </div>

                <div className="ratingCont">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <ReactStars
                      edit={false}
                      classNames="m-auto "
                      color={"rgba(20, 20, 20, 0.1)"}
                      activeColor={"#FFB319"}
                      size={window.innerWidth < 600 ? 10 : 15}
                      value={r?.rating}
                      isHalf={true}
                    />
                    <p style={{ textAlign: "center", lineHeight: "16px" }}>
                      {r?.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="LeaveReview mt-4" onClick={handleClickOpen}>
              Leave a Review
            </button>
            <br />
          </div>
        </div>
        <hr />
        <Modal
          title="Leave a Review"
          open={open}
          onCancel={handleClose}
          onOk={handleSubmit}
          okText="Submit"
          cancelText="Cancel"
        >
          <p>Share your thoughts and rate this item</p>
          <Input
            autoFocus
            placeholder="Review"
            type="text"
            value={review}
            onChange={(event) => setReview(event.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Rate
              count={5}
              value={rating}
              onChange={(value) => setRating(value)}
              style={{ fontSize: 24, color: "#FFB319" }}
            />
          </div>
        </Modal>

        <div className="row similar-products">
          <h4>Similar Products </h4>
          {relatedProducts.length < 1 && (
            <h4 className="text-center">
              <u> No Similar Products found</u>
            </h4>
          )}
          <div className="col- flex">
            {relatedProducts?.map((p) => (
              <ProductCart key={product._id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
