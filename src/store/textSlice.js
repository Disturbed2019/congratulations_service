import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URI_API} from "../const/const";

export const fetchText = createAsyncThunk(
	'text/fetchText',
	async (holiday) => {
		const res = await fetch(`${URI_API}text/${holiday}`)
		const data = await res.json()
		return data
	}
)

export const textSlice = createSlice({
	name: 'text',
	initialState: {
		text: '',
		idText: '',
		loading: '',
		error: ''
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
			state.idText = action.payload.idText
		},
		[fetchText.rejected]: (state) => {
			state.loading = 'failed'
			state.text = ''
		},
		
	}
})


export default textSlice.reducer