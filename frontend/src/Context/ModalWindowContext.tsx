import { createContext, useState } from "react";
import { ModalWindowContext } from "../models";

export const Context = createContext<ModalWindowContext>({
  modal: false,
  open: () => {},
  close: () => {},
});

export const ModalWindowState = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);
  const close = () => setModal(false);

  return (
    <Context.Provider value={{ modal, open, close }}>
      {children}
    </Context.Provider>
  );
};
