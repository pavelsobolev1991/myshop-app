import React from "react";
import { useAppSelector } from "../../Redux/hook/hook";

import "./Message.scss";

const Message: React.FC = () => {
  const { message } = useAppSelector((state) => state.cardList);

  return (
    <>
      {message ? (
        <div className="message__container">
          <p className="message__info">{message}</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Message;
