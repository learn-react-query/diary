import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Write from "./Write";
import GlobalStyles from "./styles/resetStyle";

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/write" element={<Write />} />
            </Routes>
        </>
    );
}

export default App;
