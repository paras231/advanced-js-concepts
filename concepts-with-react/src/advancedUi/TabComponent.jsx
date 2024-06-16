import { useState } from "react";

// parent tab component to render tabs
//  this main tab component will take a array of objects of tab data

// tab data format-:

// there should be label and content
// const tabs = [
//     { label: "Tab 1", content: "Any content 1" },
//     { label: "Tab 2", content: "Any content 2" },

//   ];

const TabComponent = ({ tabData, activeTabClassName, activeBg }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex flex-col">
        <TabList activeTab={activeTab} handleActiveTab={handleActiveTab}>
          <div className="flex gap-6">
            {tabData.map((t, index) => {
              return (
                <Tab
                  activeTabClassName={activeTabClassName}
                  onClick={() => handleActiveTab(index)}
                  key={index}
                  isActive={activeTab === index}
                  activeBg={activeBg}
                >
                  {t.label}
                </Tab>
              );
            })}
          </div>
        </TabList>
        <div className="flex gap-6">
          {tabData.map((t, index) => {
            return (
              <TabPanel activeTab={activeTab} tabIndex={index} key={index}>
                {t.content}
              </TabPanel>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TabComponent;

// tab list to display tabs
const TabList = ({ children, activeTab, handleActiveTab }) => {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};

const Tab = ({ children, onClick, isActive, activeTabClassName, activeBg }) => {
  return (
    <>
      <div
        onClick={onClick}
        style={{ background: isActive ? activeBg : "" }}
        className={`${isActive ? activeTabClassName : ""}  `}
      >
        {children}
      </div>
    </>
  );
};

const TabPanel = ({ children, activeTab, tabIndex }) => {
  return (
    <>
      <section className={``}>{activeTab === tabIndex && children}</section>
    </>
  );
};
