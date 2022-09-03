import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URI_API} from "../const/const";



export const fetchImage = createAsyncThunk(
	'image/fetchImage',
	async (holiday) => {
		const res = await fetch(`${URI_API}image/${holiday}`)
		const data = await res.json()
		return data
	}
)

export const imageSlice = createSlice({
		name: 'image',
		initialState: {
			urlImg: '',
			idImg: '',
			loading: '',
			error: ''
		},
		reducers: {},
		extraReducers: {
			[fetchImage.pending]: (state) => {
				state.loading = 'loading'
				state.urlImg = ''
				state.idImg = ''
			},
			[fetchImage.fulfilled]: (state, action) => {
				state.loading = 'success'
				state.urlImg = action.payload.urlImg
				state.idImg = action.payload.idImg
			},
			[fetchImage.rejected]: (state) => {
				state.loading = 'failed'
				state.urlImg = ''
			}
		}
	}
)

export default imageSlice.reducer