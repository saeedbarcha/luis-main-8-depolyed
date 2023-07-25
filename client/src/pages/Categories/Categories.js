import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useCategory from "../../hooks/useCategory";
import Layout from "../../components/Layout/Layout";
import "./Categories.css";

const Categories = () => {
  
  const categories = useCategory();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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

  return (
    <Layout title={"All Categories"}>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-8 col-md-3">
            {/* <div className="categoriesBtn ">
              <Link to={`/category`} className="btn">
                All
              </Link>
            </div> */}
            {categories.map((c) => (
              <div className="" key={c._id}>
                <div className=" m-2">
                  <Link to={`/category/${c.slug}`} className="btn categoriesBtn">
                    {c.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
