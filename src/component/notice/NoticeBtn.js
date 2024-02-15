import styles from "./Notice.module.css";
import pre from "../../imgs/previous_btn.png"
import F_pre from "../../imgs/F_previous_btn.png"
import dropdown from "../../imgs/btn_dropdown.png"
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function NoticeBtn({totalLength, refetch, Ncount}) {
    
    const [count, setCount] = useState(Ncount);
    const maxPage = Math.ceil(totalLength / count);
    const [currentPage, setCurrentPage] = useState(1);

    const change = (e) => {
        const newCount = parseInt(e.target.value)
        setCount(newCount);
        setCurrentPage(1)
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const handleNextPage = () => {
        const maxPage = Math.ceil(totalLength / count);
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        const maxPage = Math.ceil(totalLength / count);
        setCurrentPage(maxPage);
    };

    const handleSelectChange = (e) => {
        setCurrentPage(parseInt(e.target.value));
    };

      useEffect(() => {
        refetch({ take: count, cursor: (currentPage - 1) * count });
      }, [count, currentPage, refetch]);


    return(
        <div className={styles.selectBox}>
            <div className={styles.selectBox__left}>
                <div className={styles.left__number}>
                    <p>번호</p> 
                    <p>1-10 of 20</p>
                </div>
                <select onChange={change} value={count}>
                    <option value={10}>10</option>
                    <option value={totalLength}>{totalLength}</option>
                </select>
            </div>
            <div className={styles.selectBox__right}>
                <div>
                    <button className={styles.first__btn} onClick={handleFirstPage} disabled={currentPage === 1}>
                        <img src={F_pre}/>
                    </button>
                </div>
                <div>
                    <button className={styles.previous} onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <img src={pre}/>
                    </button>
                </div>
                <div className={styles.select}>
                    <p>페이지</p>
                    <select onChange={handleSelectChange} value={currentPage}>
                        {
                            [...Array(maxPage)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <button className={styles.last__btn} onClick={handleNextPage} disabled={currentPage * count >= totalLength}>
                        <img src={pre}/>
                    </button>
                </div>
                <div>
                    <button className={styles.last__btn} onClick={handleLastPage} disabled={currentPage * count >= totalLength}>
                        <img src={F_pre}/>
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default React.memo(NoticeBtn);