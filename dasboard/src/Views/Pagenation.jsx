import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

function Pagenation({
  pageNumber,
  setPageNumber,
  totalPage,
  parPage,
 showItem,
}) {
  let totalpage = Math.ceil(totalPage / parPage);
  let StartPage = pageNumber;
  let dif = totalpage - pageNumber;

  if (dif <= showItem) {
    StartPage = totalpage - showItem;
  }
  let endPage = StartPage < 0 ? showItem : showItem + StartPage;
  if (StartPage <= 0) {
    StartPage = 1;
  }
    const Cretebtn = () => {
        const btns = [];
        for (let i = StartPage; i < endPage; i++) {
            btns.push(
                <li onClick={()=>setPageNumber(i)}
                    className={`
            ${pageNumber === i
                            ? "bg-indigo-500 shadow-indigo-500/50 text-white"
                            : "bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]"
                        } w-[33px] h-[33px] rounded-full flex justify-center items-center  cursor-pointer`
                    }>
                    {i}
                </li>
            )
        }
        return btns
    }
  
  return (
    <ul className="flex gap-3">
      {pageNumber >1  && (
        <li onClick={()=>setPageNumber(pageNumber-1)} className="w-[33px] h-[33px] rounded-full items-center flex justify-center bg-slate-700 text-[#edeef0] cursor-pointer ">
          <BsChevronDoubleLeft />
        </li>
      )}
          {Cretebtn()}

          {pageNumber < pageNumber && (
        <li onClick={()=>setPageNumber(pageNumber)} className="w-[33px] h-[33px] rounded-full items-center flex justify-center bg-slate-700 text-[#edeef0] cursor-pointer ">
          <BsChevronDoubleRight />
        </li>
      )}
    </ul>
  );
}

export default Pagenation;
