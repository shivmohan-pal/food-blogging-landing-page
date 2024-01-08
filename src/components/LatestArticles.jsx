"use client";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "./data";

const LatestArticles = () => {
 const [slide ,setSlide] = useState(1);   
 const totalSlide = Math.ceil(articles.length/3);

 const handleNext =()=>{
    if(slide!==totalSlide){
        setSlide((slide)=>slide+1);
    }
 }
 const handlePrev =()=>{
    if(slide!==1){
        setSlide((slide)=>slide-1);
    }
 }
 return (
    <section className="p-20 max-w-[1440px] m-auto">
      <h1 className="text-[#0E2368] text-5xl font-bold">Latest Articles</h1>
      <div className="relative flex justify-between gap-10 mt-5">
        {articles.slice(3-(slide*3),3*slide).map((article, i) => (
          <ArticleCard
            key={i}
            imgSrc={article.imgSrc}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-1 p-3 mt-4">
        <button className={`${slide===1? "opacity-50":""} border-[1px] rounded-md border-[#0E2368] text-[#0E2368] w-7 h-7`}
        onClick={handlePrev}
        >{"<"}</button>
        <div className="text-[#424961]"><span>{slide}</span>&nbsp;/&nbsp;<span>{totalSlide}</span></div>
        <button className={`${slide===totalSlide? "opacity-50":""} border-[1px] rounded-md border-[#0E2368] text-[#0E2368] w-7 h-7`}
        onClick={handleNext}
        >{">"}</button>
      </div>
    </section>
  );
};

export default LatestArticles;
