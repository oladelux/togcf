import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import { RootState } from './types'

export const rootReducer = combineReducers({
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
})
