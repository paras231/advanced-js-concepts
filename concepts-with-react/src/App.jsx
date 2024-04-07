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
import CustomSelectbox from "./advancedUi/CustomSelectbox";
import WrapperSelectBox from "./advancedUi/WrapperSelectBox";
import Animatedcards, { CardGrid } from "./animatedUi/Animatedcards";
import CustomPagination from "./advancedUi/CustomPagination";
import TabComponent from "./advancedUi/TabComponent";
import TicTacToe from "./games/TicTacToe";
import Elements from "./dragandDrop/Elements";
import FileUploader from "./dragandDrop/FileUploader";
import Form from "./advancedUi/Form";
import CheckboxFilters from "./filters/CheckboxFilters";
const App = () => {
  const tabData = [
    {
      label: "Tab 1",
      content: " content one",
    },
    {
      label: "Tab 2",
      content: " content two",
    },
  ];
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
        <div className="p-10">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<StoreStateUrl/>}/> */}
              <Route path="/" element={<CheckboxFilters />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </>
  );
};
export default App;
