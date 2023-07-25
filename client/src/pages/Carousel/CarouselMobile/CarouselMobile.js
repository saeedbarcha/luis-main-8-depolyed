import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import SlideCardMobile from "./SlideCardMobile";
import { Button, Drawer } from "antd";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import "./CarouselMobile.css";

const CarouselMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onClose = () => {
    setIsSidebarOpen(false);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    handleSidebarToggle();
  };

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".sideBarCont") &&
      !event.target.classList.contains("navbar-toggler")
    ) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      <section className="container-fluid carouselMobile p-0">
        <div className="row">
          <div className="col-lg-12">
            <Button
              className="d-block d-lg-none navbar-toggler  m-auto sideBarBtnFixed"
              onClick={handleSidebarToggle}
            >
              {isSidebarOpen ? (
                <RiMenuUnfoldFill onClick={handleIconClick} />
              ) : (
                <RiMenuFoldFill onClick={handleIconClick} />
              )}
            </Button>
            <Drawer
              placement="left"
              closable={false}
              onClose={onClose}
              open={isSidebarOpen}
              width={"80%"}
            >
              <SideBar />
            </Drawer>
            <SlideCardMobile />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselMobile;
