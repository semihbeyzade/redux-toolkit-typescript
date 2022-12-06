import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const books = [
	{
		"id": 1,
		"idCode": "buildingMicroservices",
		"title": "Building Microservices",
	},
	{
		"id": 2,
		"idCode": "gatsbyEcommerce",
		"title": "Gatsby E-Commerce",
	},
	{
		"id": 3,
		"idCode": "rustWeb",
		"title": "Rust Web Programming",
	}
];

interface IBook {
	id: number;
	idCode: string;
	title: string;
}

interface ICartItem {
	book: IBook;
}

interface IState {
	books: IBook[];
	cartItems: ICartItem[]
}

const initialState: IState = {
	books,
	cartItems: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action: PayloadAction<ICartItem>) => {
			state.cartItems.push(action.payload);
		}
	}
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
