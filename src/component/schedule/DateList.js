import React from "react";
import Schedule from "./Schedule";
import styles from "./Schedule.module.css"

function DateList ({searchDate, scheduleData}) {
    
    const days = searchDate.toLocaleDateString()
    const hoursArray = [...Array(25).keys()];
    
    const data = new Date(days);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return(
        <div className={styles.time__table}>
            {
                <table>
                    <thead>
                        <tr>
                            <th className={styles.day}>{`${year}년 ${formattedMonth}월 ${formattedDay}일`}</th>  
                            {hoursArray.map(hour => (
                                <th key={hour}>{hour < 10 ? `0${hour}` : hour}</th>
                            ))}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData?.map((schedule, k) => (
                            
                            <tr key={k}>
                                <td>
                                    {schedule.roomName}
                                    <div className={styles.impormation}>
                                        <div>{schedule.drName}</div>
                                        <div>{schedule.drRank}</div>
                                    </div>
                                </td>
                                {
                                    hoursArray.map(hour => (
                                        
                                        <td key={hour} >
                                            <div className={`${(schedule.startHour <= hour && hour < schedule.lbStartHour) ? styles.start : ""}
                                            ${(schedule.lbStartHour <= hour && hour < schedule.lbEndHour || hour === schedule.lbStartHour) ? styles.lunch : ""}
                                            ${(schedule.lbEndHour <= hour && hour < schedule.endHour)? styles.start : ""}
                                            ${(schedule.isOffDay == true && schedule.offStartMin <= hour && hour < schedule.offEndMin)? styles.start : ""}
                                        `}>
                                            {
                                                schedule.isOffDay == true && schedule.offStartMin <= hour && hour < schedule.offEndMin ? "휴진" : ""
                                            }
                                            {
                                                schedule.lunchBreak == false && schedule.lbStartHour === 0 && schedule.lbEndHour === 0 ? "" : ""
                                            }
                                            {schedule.startHour <= hour && hour < schedule.lbStartHour ? "오전" : ""}
                                            {schedule.lunchBreak == true && schedule.lbStartHour <= hour && hour < schedule.lbEndHour || hour === schedule.lbStartHour ? "점심" : ""}
                                            {schedule.lbEndHour <= hour && hour < schedule.endHour && schedule.lbStartHour !== schedule.lbEndHour ? "오후" :""}
                                            </div>
                                        </td>
                                       
                                    ))
                                }
                            </tr>
                            
                        ))}
                    </tbody>
                </table>

            }
        </div>
    );
}

export default React.memo(DateList);