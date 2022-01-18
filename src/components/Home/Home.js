import React from 'react';
import Header from '../Header/Header';
import "./Home.css";
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from "react-router-dom";
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import Center from '../Center/Center';
import Covid19 from '../Covid19/Covid19';

const Home = () => {
    return (
        <div className='home_container'>
            <Header/>
            <div className="home-content">
                <div className="left_side">
                   <LeftSide/>
                </div>
                <div className="menu_center" id="menu_center">
                  <Router>
                    <Center/>
                     <Routes>
                       <Route path="/post" element={<Covid19 />}/>
                     </Routes>
                  </Router>
                </div>
                <div className="right_side">
                  <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default Home;