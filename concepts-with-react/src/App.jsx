import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollDown from "./scrollEvents/ScrollDown";
import Tags from "./advancedHtmlTags/Tags";
import Banner from "./advancedUi/Banner";
import Sidebar from "./advancedUi/Sidebar";
import { routes } from "./constants";
import TagsWithAttributes from "./advancedHtmlTags/TagsWithAttributes";
import Domelement from "./domelements/Domelement";
import ReactportalComponent from "./reactFundamentals/ReactportalComponent";
import StoreStateUrl from "./reactFundamentals/StoreStateUrl";
import StatePractice from "./reactFundamentals/StatePractice";
import CustomCalendar from "./advancedUi/CustomCalendar";
import BottomNavigation from "./advancedUi/BottomNavigation";
import PopperComponent from "./advancedUi/PopperComponent";

const App = () => {
  return (
    <>
      {/* <ScrollDown/> */}
      <main className="app_container">
        {/* <Tags/> */}
        {/* <Domelement /> */}
        {/* <TagsWithAttributes/> */}
        {/* <Banner /> */}
        {/* <Sidebar routes={routes}/> */}
        {/* <ReactportalComponent/> */}
        <div className="flex items-center justify-center mt-40">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<StoreStateUrl/>}/> */}
            <Route path="/" element={<PopperComponent />} />
          </Routes>
        </BrowserRouter>
        </div>
        
      </main>
    </>
  );
};
export default App;
