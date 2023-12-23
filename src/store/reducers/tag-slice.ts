// tagsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TagsState {
  tagName: string;
}

const initialState: TagsState = {
  tagName: '',
};

const tagNameSlice = createSlice({
  name: 'tagName',
  initialState,
  reducers: {
    checkTagName: (state: TagsState, action: PayloadAction<string>) => {
      state.tagName = action.payload;
    },
  },
});

export const { checkTagName } = tagNameSlice.actions;

export default tagNameSlice.reducer;
