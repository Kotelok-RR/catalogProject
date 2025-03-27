import React, { useState } from "react";

import styles from "./Pagination.module.css"

const Pagination = ({ totalPages, onSetActiveValue }) => {
  if(totalPages > 1){
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
      setCurrentPage(page);
      onSetActiveValue(page);
    };

    const renderPages = () => {
      const pages = []; // Массив кнопок для постраничной навигации
      const PagesPush = (page) =>{
        pages.push(
          <button
          key={page}
          onClick={() => {
            handleClick(page);
          }}
          className={currentPage === page ? styles.active : ""}
          >
            {page}
          </button>
        )
      }
      const PagePushDot = (key) => {
        pages.push(
          <span key={key}>
            ...
          </span>
        )
      }
      if(totalPages <= 7){
        for(let i = 1; i <= totalPages; i++){
          PagesPush(i)
        }
      }    
      else{
        PagesPush(1)
        if(currentPage <= 4){
          for(let i = 2; i <= 5 && i < totalPages; i++){
            PagesPush(i)
          }
          PagePushDot(totalPages - 1)
        }
        else if(currentPage >= 5 && currentPage <= totalPages - 4){
          PagePushDot(2)
          for(let i = currentPage - 1; i <= currentPage + 1; i++){
            PagesPush(i)
          }
          PagePushDot(totalPages - 1)
        }
        else{
          PagePushDot(2)
          for(let i = totalPages - 4; i <= totalPages - 1; i++){
            PagesPush(i)
          }
        }
        PagesPush(totalPages)
      }
      return pages;
    };
    return (
    <div className={styles.pagination} >  
      {renderPages()}
    </div>
    )
  }
  else{
    return(<></>)
  }
};

export default Pagination