import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URI_API} from "../const/const";

export const fetchText = createAsyncThunk(
	'text/fetchText',
	async (holiday) => {
		const res = await fetch(`${URI_API}text/${holiday}`)
		const data = await res.json()
		console.log(data)
		return data
	}
)



export const fetchTextId = createAsyncThunk(
	'text/fetchTextId',
	async (id) => {
		const res = await fetch(`${URI_API}text/${id}`)
		const data = await res.json()
		console.log(data)
		return data
	}
)

export const textSlice = createSlice({
	name: 'text',
	initialState: {
		text: '',
		idText: '',
		loading: ''
	},
	reducers: {},
	extraReducers: {
		[fetchText.pending]: (state) => {
			state.loading = 'loading'
			state.text = ''
			state.idText = ''
		},
		[fetchText.fulfilled]: (state, action) => {
			state.loading = 'success'
			state.text = action.payload.text
			state.idText = action.payload.id
		
		},
		[fetchText.rejected]: (state) => {
			state.loading = 'failed'
			state.text = ''
		},
		[fetchTextId.pending]: (state) => {
			state.loading = 'loading'
			state.text = ''
			state.idText = ''
		},
		[fetchTextId.fulfilled]: (state, action) => {
			state.loading = 'success'
			state.text = action.payload.text
			state.idText = action.payload.id
		},
		[fetchTextId.rejected]: (state) => {
			state.loading = 'failed'
			state.text = ''
		},
		
	}
})


export default textSlice.reducer