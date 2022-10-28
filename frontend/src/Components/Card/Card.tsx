import React from "react";
import { ICardType } from "../../models";
import { useAppDispatch } from "../../Redux/hook/hook";
import { deleteCard } from "../Main/Main.slice";
import ButtonBuy from "../Button/ButtonBuy";

import "./Card.scss";

interface CardProps {
  card: ICardType;
}

const Card = ({ card }: CardProps) => {
  const dispatch = useAppDispatch();

  function handleDelete(event: React.BaseSyntheticEvent) {
    event?.preventDefault();
    dispatch(deleteCard(event.target.id));
  }

  return (
    <>
      <div className="card__container">
        <div className="card_title_header">
          <a
            id={card.id}
            href="/"
            className="close"
            role="button"
            onClick={handleDelete}
          >
            удалить
          </a>
        </div>
        <p>
          <b>Название:</b> {card.attributes.title}
        </p>
        {card.attributes.image?.data ? (
          <img
            src={`http://localhost:1337${card.attributes.image?.data.attributes.url}`}
            alt=""
          />
        ) : (
          <img
            src="http://localhost:1337/uploads/photo_1523275335684_37898b6baf30_df48fb96d9.avif"
            alt=""
          />
        )}
        <p>
          <b>Стоимость:</b> {card.attributes.price}
        </p>
        <p>
          <b>Дополнительное описание:</b>
        </p>
        <p className="card__description">{card.attributes.description}</p>
        <ButtonBuy id={card.id} text={"Купить"} />
      </div>
    </>
  );
};

export default Card;
