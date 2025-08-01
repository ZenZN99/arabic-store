import React, { useState } from "react";
import fashion from "../../Components/data/fashion";
import furniture from "../../Components/data/furniture";
import headphones from "../../Components/data/headphone";
import laptops from "../../Components/data/laptop";
import phones from "../../Components/data/phone";
import shoes from "../../Components/data/shoes";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";


//تجميع كل المنتجات في مصفوفة واحدة
const searchProducts = [
  ...phones,
  ...laptops,
  ...shoes,
  ...fashion,
  ...furniture,
  ...headphones,
];

const Search = () => {
    //تخزن النص الذي يكتبه المستخدم في مربع البحث.
  const [searchText, setSearchText] = useState("");
  //تخزن النتائج الفورية (الاقتراحات) التي تطابق النص المكتوب.
  const [suggestions, setSuggestions] = useState([]);
  //نستخدم هذه الدالة عندما نريد الانتقال إلى صفحة أخرى.
  const navigate = useNavigate();


  //التعامل مع كل حرف يكتبه المستخدم
  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    //إذا المستخدم كتب حرفين أو أكثر، نبدأ بالبحث.

    if (text.trim().length >= 2) {
      const filtered = searchProducts.filter((product) =>
        product.title.toLowerCase().includes(text.toLowerCase())//
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    //عند الضغط على زر البحث أو Enter
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchText)}`);
      setSuggestions([]);
    }
  };

  // عند اختيار اقتراح من القائمة
  const handleSelect = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
    setSearchText("");
    setSuggestions([]);
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="search-box">
        <input
          type="text"
          placeholder="أبحث عن منتجك الأن"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit">
          <IoSearch />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((product) => (
            <li key={product.id} onClick={() => handleSelect(product)}>
              <img src={product.image} alt="img" />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;