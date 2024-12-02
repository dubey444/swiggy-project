// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/categories");  ////npx nodemon index.js
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 3);
  };

  const nextSlide = () => {
    if (slide < categories.length - 8) setSlide(slide + 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between p-3">
        <div className="text-[30px] font-bold">Whats on your mind?</div>
        <div className="flex items-center ml-auto">
          <button
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={prevSlide}
          >
            <TiArrowLeftThick />
          </button>
          <button
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <TiArrowRightThick />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => (
          <div
            className="w-[135px] shrink-0 transition-transform duration-500"
            key={index}
            style={{ transform: `translateX(${slide * -100}%)` }}
          >
            <img
              src={`http://localhost:5000/images/${cat.image}`}
              alt={cat.name || "Category"}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <hr className="border-[1px]" />
    </div>
  );
};

export default Category;
