import styles from "./Notice.module.css";
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { useState, useEffect } from "react";
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
    
    // const [currentPage, setCurrentPage] = useState(1);
    // const {loading, error, data, refetch } = useQuery(GET_NOTICE_LIST, {
    //     variables: {take: count, cursor:0}
    // });
    
    // if(!loading && !error && data !== cachedData) {
    //     setCachedData(data)
    // }

    // const {noticeList, totalLength} = data.seeNotices;

    // const noticeList = cachedData?.seeNotices?.noticeList;
    // const totalLength = data?.seeNotices?.totalLength;
    // const maxPage = Math.ceil(totalLength / count);

    // const change = (e) => {
    //     const newCount = parseInt(e.target.value)
    //     setCount(newCount);
    //     setCurrentPage(1)
    // }

    // const handlePreviousPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };
    
    // const handleNextPage = () => {
    //     const maxPage = Math.ceil(totalLength / count);
    //     if (currentPage < maxPage) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };

    // const handleFirstPage = () => {
    //     setCurrentPage(1);
    // };

    // const handleLastPage = () => {
    //     const maxPage = Math.ceil(totalLength / count);
    //     setCurrentPage(maxPage);
    // };
    
    // const handleSelectChange = (e) => {
    //     setCurrentPage(parseInt(e.target.value));
    // };

    //   useEffect(() => {
    //     refetch({ take: count, cursor: (currentPage - 1) * count });
    //   }, [count, currentPage, refetch]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <div className={styles.content}>
            <NoticeList GET_NOTICE_LIST={GET_NOTICE_LIST} />
        </div>
    );
}

