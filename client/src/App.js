import React from "react";
import { useRef, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./pages/Main";
import List from "./board/List";
import Modify from "./board/Modify";
import View from "./board/View";
import Write from "./board/Write";
import Layout from "./Layout";


function App() {

  const [list, setList] = useState([    
  ]);

  const idRef = useRef(1);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Layout />}>
                <Route path="list" element={<List list={list} />} />
                <Route path="view/:id" element={<View list={list} setList={setList} />} />
                <Route path="modify/:id" element={<Modify list={list} setList={setList} />} />
                <Route path="write" element={<Write list={list} setList={setList} idRef={idRef} />} />
            </Route>
      </Routes>
    </Router>
  );
}

export default App;
