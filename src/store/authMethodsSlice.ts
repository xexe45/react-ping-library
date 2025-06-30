import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthMethod } from '../interfaces/AuthMethod.interface';

export interface AuthMethodState {
  isLoading: boolean;
  methods: AuthMethod[];
  selected: AuthMethod | null;
  code: string | null;
}

const initialState: AuthMethodState = {
  isLoading: false,
  methods: [],
  selected: null,
  code: null
}

export const authMethodSlice = createSlice({
  name: 'authMethod',
  initialState,
  reducers: {
    startLoading: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    startMethods: (state, action: PayloadAction< AuthMethod[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.methods = action.payload;
    },
    finishLoading: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = false;
    },
    startSelectedMethod: (state, action: PayloadAction<AuthMethod>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selected = action.payload;
    },
    finishSelectedMethod: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selected = null;
    },
    startCode: (state, action: PayloadAction<string | null>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.code = action.payload;
    },
    /*
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    */
  },
})

// Action creators are generated for each case reducer function
export const { startLoading, startMethods, finishLoading, startSelectedMethod, finishSelectedMethod, startCode } = authMethodSlice.actions

export default authMethodSlice;