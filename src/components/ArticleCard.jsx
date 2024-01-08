const ArticleCard=({imgSrc, title, description})=>{
    return (
        <article className="flex flex-col flex-none gap-3 w-96 border-2 border-[rgba(147, 162, 211, 0.38)] rounded-3xl p-5">
         <img src={imgSrc} alt={title}/>
         <h2 className="text-2xl font-bold text-[#0E2368]">{title}</h2>
         <p className="text-[#444957] font-normal text-base">{description}</p>
         <div>
         <button className="border-[1px] border-[#424961] text-[#424961] hover:text-white hover:bg-[#424961] rounded-3xl px-3 py-1 font-semibold text-base">Read More</button>
         </div>
        </article>
    )
}

export default ArticleCard;