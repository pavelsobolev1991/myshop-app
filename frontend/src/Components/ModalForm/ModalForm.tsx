import React, { useState } from "react";
import { useAppDispatch } from "../../Redux/hook/hook";
import { createCard } from "../Main/Main.slice";

import "./ModalForm.scss";

interface ModalProps {
  children?: React.ReactNode;
  close: () => void;
}

const ModalForm = ({ close }: ModalProps) => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string | number>('1');
  const [price, setPrice] = useState<number>(100);
  const [description, setDescription] = useState<string>("");

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault()
    dispatch(createCard({ title, image, description, price}))
    close()
  }

  return (
    <>
      <form className="form__create" onSubmit={handleCreate}>
        <label htmlFor="title">
          <p>Название товара</p>
          <input
            type="text"
            name="input__title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название товара"
            required
          />
        </label>
        <label htmlFor="image">
          <p>Тестовое изображение</p>
          <input
            type="text"
            name="input__image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Изображение"
            required
          />
        </label>
        <label htmlFor="price">
          <p>Цена</p>
          <input
            className="input__price"
            type="number"
            value={price}
            required
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Цена товара"
          />
        </label>
        <label htmlFor="price">
          <p>Описание</p>
          <textarea
            className="input__description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание товара"
          />
        </label>
        <button type="submit" className="form__button">Создать товар</button>
      </form>
    </>
  );
};

export default ModalForm;
