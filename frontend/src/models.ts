export interface ICardType {
  id: string;
  attributes: {
    title: string;
    price: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
  };
}

export interface Image {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: any;
  height: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface IActionPayload {
  data: ICardType;
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface IApiAnswer {
  data: ICardType[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface ICardCreate {
  title: string;
  price: number | undefined;
  description: string;
  image: string | number;
}

export interface CardListState {
  cardList: ICardType[];
  basketState: number;
  basketPriceState: Array<number>;
  message: string;
  error: null | string;
}

export interface ButtonOpen {
  open?: () => void;
  onClick?: (event: React.BaseSyntheticEvent) => void;
  text: string;
}

export interface ButtonBuyProps {
  id?: string | number;
  onClick?: (event: React.BaseSyntheticEvent) => void;
  text: string;
}

export interface ModalWindowContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}