import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import styles from "./sidebar.module.css";
const Sidebar = ({ routes }) => {
  // handle sidebar show state
  const [show, setShow] = useState(true);

  const handleShowSidebar = () => {
    setShow(!show);
  };

  const handleHideSidebar = () => {
    setShow(false);
  };

  const renderIcon = (icon, index) => {
    const Icon = icon;
    return <div key={index}>{<Icon />}</div>;
  };
  console.log(show);
  return (
    <>
     {show ? (
          <MdMenuOpen onClick={handleShowSidebar} />
        ) : (
          <MdClose onClick={handleShowSidebar} />
        )}
      <main className={styles.sidebar_wrapper}>
       
        {show && (
          <section
            className={`${styles.sidebar_section} ${
              !show
                ? styles.sidebar_display_state
                : styles.sidebar_initial_state
            }`}
          >
            {routes.map((route, index) => {
              return (
                <div key={index} className={styles.sidebar_content}>
                  <span>{route.label}</span>
                  {renderIcon(route.icon, index)}
                </div>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
};

export default Sidebar;



function FlipCard(){
  return (
    <>
    </>
  )
}