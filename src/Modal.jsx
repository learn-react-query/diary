import { React, useRef, useState } from "react";
import styled from "styled-components";

function Modal() {
    const outside = useRef();
    const [isDelete, setIsDelete] = useState(false);

    return (
        <>
            {isDelete && (
                <Background
                    ref={outside}
                    onClick={(e) => {
                        if (e.target == outside.current) setIsDelete(false);
                    }}
                >
                    <DeleteModal>
                        <Message>정말 삭제하시겠습니까?</Message>
                        <BtnGroup>
                            <DeleteBtn>예</DeleteBtn>
                            <Line></Line>
                            <CancelBtn>아니요</CancelBtn>
                        </BtnGroup>
                    </DeleteModal>
                </Background>
            )}
        </>
    );
}

const Background = styled.div`
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

const DeleteModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 236px;
    background: #ffffff;
    border-radius: 5px;
`;

const Message = styled.strong`
    position: absolute;
    top: 77px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
`;

const BtnGroup = styled.div`
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    border-top: solid 1px #d8ddde;
`;

const DeleteBtn = styled.button`
    width: 250px;
    height: 60px;
    font-size: 14px;
    color: #5a6a72;

    &:hover {
        background-color: rgba(216, 221, 222, 0.3);
    }
`;

const CancelBtn = styled.button`
    width: 250px;
    height: 60px;
    font-size: 14px;
    color: #ff4f6e;

    &:hover {
        background-color: rgba(216, 221, 222, 0.3);
    }
`;

const Line = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 1px;
    height: 60px;
    background: #d8ddde;
`;
export default Modal;
