import React from "react";
import dhwlsdnjs from "../../imgs/dhwlsdnjs.jpg";
import styles from "./Notice.module.css";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import NoticeBtn from "./NoticeBtn";
function NoticeList({GET_NOTICE_LIST}) {

    const [count, setCount] = useState(10);
    const [cachedData, setCachedData] = useState(null);

    const { loading, error, data, refetch } = useQuery(GET_NOTICE_LIST, {
        variables: {take: count, cursor:0}
    });

    
    const noticeList = data?.seeNotices?.noticeList;
    const totalLength = data?.seeNotices?.totalLength;

    // console.log(noticeList);
    if (loading) return <p></p>;
    if (error) return <p>{`err_00: 사내 공지사항 조회 실패`}</p>;

    return(
        <div className={styles.content__box}>
            <div className={styles.title}>공지사항</div>
            <div className={styles.subTitle}>사내공지</div>
            <div className={styles.content__boxs}>
                {loading}
                {
                    noticeList.map((notice) => (
                        <div className={styles.list} key={notice.ntc_id}>
                            <div className={styles.list__Left}>
                                <img src={dhwlsdnjs} />
                            </div>
                            <div className={styles.list__right}>
                                <div className={styles.list__right__title}>
                                    <p>{notice.title}</p>
                                </div>
                                <div className={styles.list__right__name}>
                                    <p>{notice.name}</p>
                                    <p>{notice.rank}</p>
                                    <p><FormatDate createAt={notice.createdAt}/></p>
                                </div>
                                <div className={styles.list__right__text}>
                                    <p>{notice.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <NoticeBtn totalLength={totalLength} Ncount={count} refetch={refetch}/>
        </div>
    );
}
export default React.memo(NoticeList);

function FormatDate({createAt}) {
    const data = new Date(createAt);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();
    const hours = data.getHours();
    const minutes = data.getMinutes();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return <>
        {
            `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}`
        }
    </>
}