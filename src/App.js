import "./App.css";
import "./index.css";
import "./css/custom.css";
import Home from "./views/home/Home";
import Post from "./views/post/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourtExchange from "./views/court/CourtExchange";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
            <Route path="/" index element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/search" element={<CourtExchange/>}></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
