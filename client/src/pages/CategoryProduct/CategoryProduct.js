import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams} from "react-router-dom";
import ProductCart from "../../components/ProductCart/ProductCart";
import axios from "axios";



const CategoryProduct = () => { 
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.name}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container-fluid mt-4  mb-4">
        <h4 className="text-center mt-3 pt-3">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row mt-3 pt-3">
          <div className="col-md-12 ">
            

            <div className="row flex">
              {products?.map((product) => (
                <ProductCart key={product._id} product={product} />
                
              ))}
            </div>
 

            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
