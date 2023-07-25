import React, { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices";
import { AiOutlineReload } from "react-icons/ai";
import SectionTitleWithMoreBtn from "../../components/SectionTitle/SectionTitleWithMoreBtn/SectionTitleWithMoreBtn";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./flashDeals.css";

const FlashDeals = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data?.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get filtered products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  // passing iconName to SectionTitle component
  const SectionIcon = "MdFlashOn";
  const titleName = "Flash Deals";

  return (
    <>
      <div
        id="FlashDeals"
        className="container-fluid mt-5 mb-5 mainContFreshDeals"
      >
        <SectionTitleWithMoreBtn
          SectionIcon={SectionIcon}
          titleName={titleName}
        />
        <div className="row">
          <div className="col-md-2 filters border shadow">
            <h4 className="">By Category</h4>
            <div className="d-flex flex-column justify-content-center">
              {categories?.map((c, i) => (
                <Checkbox
                  key={i}
                  onChange={(e) => handleFilter(e.target.checked, c?._id)}
                  style={i === 0 ? {} : { marginLeft: "8px" }}
                >
                  {c?.name}
                </Checkbox>
              ))}
            </div>
            {/* price filter  */}
            <h4 className="">By Price</h4>
            <div className="d-flex flex-column">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p, i) => (
                  <div key={i} className="">
                    <Radio value={p?.array}>{p?.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-md-column align-items-center justify-content-between FilterBtnCont mt-3 mb-3">
              <div>
                <button
                  className="btn-resetFilter"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTER
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-center  ">
                {products && products.length < total && (
                  <button
                    className="loadmore "
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(page + 1);
                    }}
                  >
                    {loading ? (
                      "Loading ..."
                    ) : (
                      <>
                        Loadmore <AiOutlineReload />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          <section className="flash border mt-4 mt-md-0 col-md-10 p-4 ">
            <div className="row d-flex">
              {products?.map((product, i) => (
                <ProductCart key={i} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FlashDeals;
