import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { motion } from "motion/react";

const LatestColletion = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-10"
    >
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center py-8 text-3xl"
      >
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{duration: 1, delay: 0.5}}>
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Hello Welcome and Shop With us
          </p>
        </motion.div>
      </motion.div>

      {/* Rendering Products */}
      <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{duration: 0.4, ease: "easeOut"}} 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {LatestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LatestColletion;
