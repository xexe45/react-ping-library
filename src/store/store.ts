import { configureStore } from '@reduxjs/toolkit'
import authMethodSlice from './authMethodsSlice'

export const store = configureStore({
  reducer: {
    authMethods: authMethodSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch