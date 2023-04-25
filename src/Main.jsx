import styled from "styled-components";
import Modal from "./Modal";
import Header from "./Header";
import InfiniteScroll from "./InfiniteScroll";
import Pagination from "./Pagination";
import List from "./assets/icon-list.svg";
import Page from "./assets/icon-pagination.svg";
import { useState } from "react";

function Main() {
    const [isList, setIsList] = useState(true);

    return (
        <>
            <Modal />
            <Header isWrite={false} />
            <DiaryMain>
                <h2 className="a11y-hidden">일기 목록</h2>
                {isList ? (
                    <>
                        <BtnGroup>
                            <button disabled>
                                <img src={List} alt="스크롤 보기" />
                            </button>
                            <button
                                onClick={() => {
                                    setIsList(false);
                                }}
                            >
                                <img src={Page} alt="페이지별 보기" style={{ opacity: 0.4 }} />
                            </button>
                        </BtnGroup>
                        <InfiniteScroll />
                    </>
                ) : (
                    <>
                        <BtnGroup>
                            <button
                                onClick={() => {
                                    setIsList(true);
                                }}
                            >
                                <img src={List} alt="스크롤 보기" style={{ opacity: 0.4 }} />
                            </button>
                            <button disabled>
                                <img src={Page} alt="페이지별 보기" />
                            </button>
                        </BtnGroup>
                        <Pagination />
                    </>
                )}
            </DiaryMain>
        </>
    );
}

export const DiaryMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BtnGroup = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 34px;
    width: 826px;
    padding: 29px 0;
`;

export default Main;
