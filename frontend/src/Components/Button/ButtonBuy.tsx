import React from "react";
import { useAppDispatch } from "../../Redux/hook/hook";
import { ButtonBuyProps } from "../../models";
import { buyCard } from "../Main/Main.slice";
import "./Button.scss";

const ButtonBuy: React.FC<ButtonBuyProps> = ({ text, id}) => {
  const dispatch = useAppDispatch();

  function handleBuy(event: React.BaseSyntheticEvent) {
    event?.preventDefault();
    dispatch(buyCard(id));
  }

  return (
    <>
      <button className="btn_buy" onClick={handleBuy}>
        {text}
      </button>
    </>
  );
};

export default ButtonBuy;
