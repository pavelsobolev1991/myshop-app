import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ICardType, CardListState, ICardCreate } from "../../models";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337";

const initialState: CardListState = {
  cardList: [],
  basketState: 0,
  basketPriceState: [],
  message: "",
  error: "",
};

const loadMainList = createAsyncThunk<
  ICardType[],
  undefined,
  { rejectValue: string }
>("mainList/load", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/cards/?populate=image`);
    const data = response.data.data;
    return data;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

const createCard = createAsyncThunk<
  ICardType,
  ICardCreate,
  { rejectValue: string }
>("card/add", async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.post("/api/cards", { data: payload });
    const data = response.data.data;
    return data;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

const deleteCard = createAsyncThunk<
  ICardType,
  ICardCreate,
  { rejectValue: string }
>("card/delete", async (payload, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/api/cards/${payload}`);
    const data = response.data.data;
    return data;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

const MainListSlice = createSlice({
  name: "cardList",
  initialState,
  reducers: {
    buyCard(state, action: PayloadAction<string | number | undefined>) {
      let newOrder = state.cardList.find((card) => card.id === action.payload);

      if (newOrder) state.basketState += 1;

      let newOrderPrice = state.cardList.find((card) =>
        card.id === action.payload ? card.attributes.price : 0
      );

      if (newOrderPrice)
        state.basketPriceState.push(newOrderPrice?.attributes.price);

      let sumProductPrice: number | undefined = state.basketPriceState.reduce(
        (sum: number, price: number) => sum + price,
        0
      );

      if (state.basketState !== state.basketState - 1) {
        state.message = `1 новый заказ на сумму ${JSON.stringify(
          newOrderPrice?.attributes.price
        )} рублей. Количество товаров в корзине ${
          state.basketState
        } на общую сумму ${sumProductPrice}`;
      } else {
        state.message = "Произошла ошибка";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMainList.fulfilled, (state, action) => {
        state.cardList = action.payload;
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.cardList.push(action.payload);

        if (state.cardList.length !== state.cardList.length - 1) {
          state.message = "Товар добавлен";
        } else {
          state.message = "Товар не удалось создать";
        }
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.cardList = state.cardList.filter(
          (el) => el.id !== action.payload.id
        );
        if (state.cardList.length - 1 !== state.cardList.length) {
          state.message = "Товар удален";
          
        } else {
          state.message = "Товар не удалось удалить!";
        }
      })
      .addCase(loadMainList.rejected, (state, action: AnyAction) => {
        state.error = action.payload;
      });
  },
});

export { loadMainList, createCard, deleteCard };

export const { buyCard } = MainListSlice.actions;

export default MainListSlice.reducer;
