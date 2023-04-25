import { Link } from "react-router-dom";
import styled from "styled-components";
import QuoteStart from "./assets/quote-start.svg";
import QuoteEnd from "./assets/quote-end.svg";
import Edit from "./assets/icon-edit.svg";
import Delete from "./assets/icon-delete.svg";

function Article() {
    return (
        <DiaryArticle>
            <ArticleTitle>이는 청춘의 것은 그들의 운다.</ArticleTitle>
            <ArticleTime dateTime="2023-04-26">2023.02.24.THU</ArticleTime>
            <ArticleContent>
                이는 청춘의 것은 그들의 운다. 동산에는 수 것이 있는 뼈 이상의 쓸쓸하랴? 없으면, 날카로우나 뛰노는 풀이 아니다. 황금시대를 무한한 따뜻한 청춘이 같으며, 속잎나고, 운다. 위하여서 커다란
                영락과 따뜻한 피고 안고, 뼈 봄바람이다. 가는 곧 아니한 눈에 얼마나 있음으로써 지혜는 대한 얼마나 봄바람이다. 때까지 위하여 가지에 열락의 것이다. 그림자는 꽃이 천하를 우리 찬미를
                원대하고, 인생을 때에, 황금시대다. 목숨을 할지니, 청춘은 용기가 말이다.
            </ArticleContent>
            <BtnGroup>
                <ArticleBtn>
                    <Link to="/write">
                        <img src={Edit} alt="수정" />
                    </Link>
                </ArticleBtn>
                <Line></Line>
                <ArticleBtn>
                    <img src={Delete} alt="삭제" />
                </ArticleBtn>
            </BtnGroup>
        </DiaryArticle>
    );
}

const DiaryArticle = styled.article`
    width: 728px;
    border-color: #677880;
    border-style: solid;
    border-width: 4px 1px 1px 1px;
    padding: 64px 48px;
    position: relative;
    margin-bottom: 76px;

    &::after {
        content: "";
        display: block;
        width: 80px;
        height: 40px;
        background: royalblue;
        position: absolute;
        top: -20px;
        left: 30px;
        background: #fffaf0 url(${QuoteStart}) no-repeat 0 0 / contain;
    }

    &::before {
        content: "";
        display: block;
        width: 80px;
        height: 40px;
        background: royalblue;
        position: absolute;
        bottom: -20px;
        right: 30px;
        background: #fffaf0 url(.${QuoteEnd}) no-repeat 0 0 / contain;
    }
`;

const ArticleTitle = styled.h3`
    color: #29363d;
    font-size: 16px;
    float: left;

    &::before {
        content: "";
        display: block;
        width: 100%;
        border-top: 1px solid #677880;
        position: absolute;
        top: 4px;
        left: 0;
        z-index: -1;
    }
`;

const ArticleTime = styled.time`
    color: #677880;
    font-size: 12px;
    float: right;
`;

const ArticleContent = styled.p`
    color: #5a6a72;
    font-size: 14px;
    line-height: 1.4;
    clear: both;
    margin-top: 40px;
`;

const BtnGroup = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #fff;
    border: 1px solid #677880;
    width: 111px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ArticleBtn = styled.button`
    width: 32px;
    height: 32px;
    background: none;
    padding: 0;
    opacity: 0.6;
    transition: opacity 0.3s;
    &:hover {
        opacity: 1;
    }
`;

const Line = styled.div`
    display: inline-block;
    width: 1px;
    height: 16px;
    background: #d8ddde;
    margin: 0 4px;
`;

export default Article;
