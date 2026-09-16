// HomePage.js
import React, { useState, useEffect} from 'react';
import "./HomePage.css";
// import IconButton from "../IconButton/IconButton";
// import CardList from "../CardList/CardList";
// import Headshot from "../Headshot/Headshot";
import Modal from "../Modal/Modal";
import { cardContents } from './cardContents';
import HomePageLandscape from './HomePageLandscape';
import HomePagePortrait from './HomePagePortrait';

const HomePage = () => {
  const [modalContent, setModalContent] = useState({});
  const setModal = (title, body) => setModalContent({ title, body });

  const [open, setOpen] = useState(false);
  const openModalAndSetContent = (modalContent) => {
    setOpen(true);
    setModal(modalContent.title, modalContent.body);
  };
  const closeModal = () => setOpen(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="content">
      <Modal open={open} close={closeModal}>
        {modalContent}
      </Modal>

      {windowWidth >= 992 ? (
        <HomePagePortrait cardContents={cardContents} openModalAndSetContent={openModalAndSetContent} />
      ) : (
        <HomePageLandscape cardContents={cardContents} openModalAndSetContent={openModalAndSetContent} />
      )}
    </div>
  );
};

export default HomePage;
