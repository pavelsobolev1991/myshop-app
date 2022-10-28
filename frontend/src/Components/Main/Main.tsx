import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/ModalWindowContext";
import { loadMainList } from "../Main/Main.slice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook/hook";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import ModalForm from "../ModalForm/ModalForm";
import Message from "../Message/Message";
import Header from "../Header/Header";

import "./Main.scss";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cardList } = useAppSelector((state) => state.cardList);
  const { modal, close } = useContext(Context);

  useEffect(() => {
    dispatch(loadMainList());
  }, [dispatch]);

  console.log(cardList);
  return (
    <>
      <div className="main__container">
        <Header></Header>
        {modal && (
          <Modal close={close}>
            <ModalForm close={close}></ModalForm>
          </Modal>
        )}
        <Message />
        {cardList ? (
          <Cards cards={cardList} />
        ) : (
          <p className="main__info">На сайте на данный момент нет товаров</p>
        )}
      </div>
    </>
  );
};

export default Main;
