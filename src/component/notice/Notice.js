import styles from "./Notice.module.css";
import { gql } from '@apollo/client';

import NoticeList from "./NoticeList"

const GET_NOTICE_LIST = gql`
    query NoticeList($take: Int, $cursor: Int) {
        seeNotices(take: $take, cursor: $cursor) {
            noticeList {
                ntc_id
                creatorImg
                title
                name
                rank
                createdAt
                text
            }
            totalLength
        }
    }
    `;

export default function SeeNotice() {
    
    return (
        <div className={styles.content}>
            <NoticeList GET_NOTICE_LIST={GET_NOTICE_LIST} />
        </div>
    );
}

