import { createSlice } from '@reduxjs/toolkit'

export const currentSetting = createSlice({

    name: 'currentSetting',

    initialState: {
        value: 'ContactUs'
    },

    reducers: {
        setcurrentSetting: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setcurrentSetting } = currentSetting.actions

export default currentSetting.reducer