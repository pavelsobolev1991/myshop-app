import React, { useContext } from "react";
import Button from "../Button/Button";
import { Context } from "../../Context/ModalWindowContext";
import { useAppSelector } from "../../Redux/hook/hook";

import basket from "../../assets/shopping-cart.png";

import "./Header.scss";

const Header: React.FC = () => {
  const { open } = useContext(Context);
  const { basketState } = useAppSelector((state) => state.cardList);

  return (
    <>
      <div className="header__main__container">
        <div className="header__container">
          <a href="/" className="logo">
            MyShop
          </a>
          <Button open={open} text={"Добавить товар"}></Button>
          <div className="header_basket_container">
            <p>Корзина</p>
            <img src={basket} alt="" />
            <p>{basketState}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
