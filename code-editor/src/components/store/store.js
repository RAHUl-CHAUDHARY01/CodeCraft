import { configureStore } from '@reduxjs/toolkit'
import  currentSetting  from '../../features/homepage.js';

export default configureStore({
    reducer:{
        currentSetting: currentSetting
    }
})
