import styles from "./Schedule.module.css";
import { gql } from 'graphql-tag';
import DateBtn from "./DateBtn";
import { useState } from "react";
import { useCallback } from "react";
import { useQuery } from "@apollo/client";

const GET_SCHEDULE = gql`
  query SeeSchedule($searchDate: String!) {
    seeSchedule(searchDate: $searchDate) {
      roomName
      drName
      drRank
      subDrUsed
      isOffDay
      offStartHour
      offStartMin
      offEndHour
      offEndMin
      startHour
      startMin
      endHour
      endMin
      lunchBreak
      lbStartHour
      lbStartMin
      lbEndHour
      lbEndMin
    }
  }
`;

export default function Schedule() {
    return (
        <div className={styles.contents}>
            <DateBtn GET_SCHEDULE={GET_SCHEDULE}/>
            {/* { searchDate.toLocaleDateString()} */}
            
        </div>
    );
}