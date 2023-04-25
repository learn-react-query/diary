import styled from "styled-components";
import Article from "./Article";
import { useState } from "react";
import Prev from "./assets/icon-prev.svg";
import Next from "./assets/icon-next.svg";

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
            <Article />
            <PageWrap>
                {currentPage <= 1 ? (
                    <button disabled style={{ opacity: 0.4 }}>
                        <img src={Prev} alt="이전페이지" />
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            setCurrentPage((prevValue) => prevValue - 1);
                        }}
                    >
                        <img src={Prev} alt="이전페이지" />
                    </button>
                )}

                <PageNumber>{currentPage}</PageNumber>

                {currentPage >= 10 ? (
                    <button disabled style={{ opacity: 0.4 }}>
                        <img src={Next} alt="다음페이지" />
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            setCurrentPage((nextValue) => nextValue + 1);
                        }}
                    >
                        <img src={Next} alt="다음페이지" />
                    </button>
                )}
            </PageWrap>
        </>
    );
}

const PageWrap = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

const PageNumber = styled.span`
    width: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`;
export default Pagination;
