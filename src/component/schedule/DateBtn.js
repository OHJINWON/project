import styles from "./Schedule.module.css";
import pre from "../../imgs/previous_btn.png"
import F_pre from "../../imgs/F_previous_btn.png"
import { useQuery } from '@apollo/client';
import { useState, useCallback } from "react";
import DateList from "./DateList"

export default function DateBtn({GET_SCHEDULE}) {

    const [searchDate, setSearchDate] = useState(new Date()) //현재 날짜
    const [cachedData, setCachedData] = useState(null);

    const nextDateBtn = useCallback(() => {
        const nextDate = new Date(searchDate);
        nextDate.setDate(nextDate.getDate() + 1)
        setSearchDate(nextDate);
    }, [searchDate]);

    const prevDateBtn = useCallback(() => {
        const prevDate = new Date(searchDate);
        prevDate.setDate(prevDate.getDate() - 1);
        setSearchDate(prevDate)
    }, [searchDate]);

    const { loading, error, data } = useQuery(GET_SCHEDULE, {
        variables: { searchDate: searchDate.toISOString().split('T')[0] },
    });

    // if(error) {
    //     return "일별 운영 스케쥴 조회에 실패하였습니다."
    // }

    if (loading) return <p></p>;
    if (error) return <p>{`err_00 : 일별 운영 스케쥴 조회에 실패하였습니다.`}</p>;

    if(!loading && !error && data !== cachedData) {
        setCachedData(data)
    }

    
    const scheduleData = cachedData?.seeSchedule;


    return(
        <div className={styles.content__box}>
            <div className={styles.box01}>
                <p>운영 스케줄</p>
                <div className={styles.btn__box}>
                    <button onClick={prevDateBtn}><img src={pre}></img></button>
                    <button onClick={nextDateBtn}><img src={pre}></img></button>
                </div>
            </div>
            <div className={styles.box02}>
                <DateList searchDate={searchDate} scheduleData={scheduleData} />
            </div>
        </div>
        
    );
}