import styled from "styled-components";
import { DiaryMain } from "./Main";
import Header from "./Header";
import Heart from "./assets/heart.svg";

function Write() {
    const isEdit = false;

    return (
        <>
            <Header isWrite={true} />
            <DiaryMain>
                <DiaryWrap>
                    <WriteH2>2023.02.27의 비밀일기</WriteH2>
                    <form>
                        <label className="a11y-hidden" htmlFor="diary-title">
                            일기 제목
                        </label>
                        <input className="input-style" id="diary-title" type="text" placeholder="제목" required />

                        <label className="a11y-hidden" htmlFor="diary-content">
                            일기 내용
                        </label>
                        <DiaryText name="" id="diary-content" placeholder="오늘의 비밀은 무엇인가요?" required></DiaryText>

                        {isEdit ? <BackBtn>수정하기</BackBtn> : <BackBtn>작성하기</BackBtn>}
                    </form>
                </DiaryWrap>
            </DiaryMain>
        </>
    );
}

const WriteH2 = styled.h2`
    font-size: 16px;
    font-weight: bold;
    background: url(${Heart}) no-repeat 0 center / 1.4em;
    padding-left: 1.4em;
    margin-bottom: 16px;
`;

const DiaryWrap = styled.div`
    width: 416px;
`;

const DiaryText = styled.textarea`
    display: block;
    width: 100%;
    height: 360px;
    resize: none;
    padding: 16px;
    margin: 16px 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: inherit;
`;

const BackBtn = styled.button`
    display: block;
    width: 100%;
    padding: 0;
    background: #29363d;
    opacity: 0.7;
    color: white;
    height: 48px;
    border: 0;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;

    &:hover {
        opacity: 1;
    }
`;

export default Write;
