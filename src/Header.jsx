import styled from "styled-components";
import Logo from "./assets/logo.svg";
import Edit from "./assets/icon-edit.svg";
import Back from "./assets/icon-logout.svg";
import { Link } from "react-router-dom";

function Header({ isWrite }) {
    return (
        <CommonHeader>
            <HeaderWrap>
                <h1>
                    <a href="./">
                        <img src={Logo} alt="두근두근 비밀일기" />
                    </a>
                </h1>
                {isWrite ? (
                    <WriteLink to="/">
                        <img src={Back} alt="" />
                        나가기
                    </WriteLink>
                ) : (
                    <WriteLink to="/write">
                        <img src={Edit} alt="" />
                        일기 쓰러가기
                    </WriteLink>
                )}
            </HeaderWrap>
        </CommonHeader>
    );
}

const CommonHeader = styled.header`
    background-color: white;
`;

const HeaderWrap = styled.div`
    width: 1224px;
    max-width: calc(100% - 60px);
    height: 120px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const WriteLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 1em 1em 1em 2.8em;
    text-decoration: none;
    color: #5a6a72;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`;

// const H1 = styled.h1``;

// header {
//     background-color: white;
//   }
//   .header-wrap {
// width: 1224px;
// max-width: calc(100% - 60px);
// height: 120px;
// margin: auto;
// display: flex;
// justify-content: space-between;
// align-items: center;
//   }
//   .logo {
//     height: 75px;
//   }
//   .hello {
//     display: inline-block;
//   }
//   .hello strong {
//     box-shadow: inset 0 -0.6em rgba(255, 79, 110, 0.5);
//   }
export default Header;
