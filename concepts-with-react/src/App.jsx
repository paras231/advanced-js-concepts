import React from "react";
import "./App.css";
import ScrollDown from "./scrollEvents/ScrollDown";
import Tags from "./advancedHtmlTags/Tags";
import Banner from "./advancedUi/Banner";
import Sidebar from "./advancedUi/Sidebar";
import { routes } from "./constants";
import TagsWithAttributes from "./advancedHtmlTags/TagsWithAttributes";
import Domelement from "./domelements/Domelement";
const App = () => {
  return (
    <>
      {/* <ScrollDown/> */}
      <main className="app_container">
        {/* <Tags/> */}
        {/* <Domelement /> */}
        {/* <TagsWithAttributes/> */}
        {/* <Banner /> */}
          <Sidebar routes={routes}/>
      </main>
    </>
  );
};
export default App;
