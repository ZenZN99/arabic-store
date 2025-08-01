import React from "react";
import { useLocation } from "react-router-dom";
import fashion from "../../Components/data/fashion";
import furniture from "../../Components/data/furniture";
import headphones from "../../Components/data/headphone";
import laptops from "../../Components/data/laptop";
import phones from "../../Components/data/phone";
import shoes from "../../Components/data/shoes";
import ProductCard from "../../Components/products/ProductCard";
import './searchResults.css';
const allProducts = [
  ...phones,
  ...laptops,
  ...shoes,
  ...fashion,
  ...furniture,
  ...headphones,
];

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results-page">
      <h2>{query} : نتائج البحث عن</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>لا توجد نتائج مطابقة</p>
      )}
    </div>
  );
};

export default SearchResults;