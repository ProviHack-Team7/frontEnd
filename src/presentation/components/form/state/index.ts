import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PayloadActionType {
  formName: string;
  inputName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

type InitialFormStateType = Record<string, Record<string, any>> | undefined;

const initialState: InitialFormStateType = {
  '': {
    '': '',
  },
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    onChange: (
      state: InitialFormStateType,
      action: PayloadAction<PayloadActionType>
    ) => {
      const { formName } = action.payload;
      const { inputName } = action.payload;
      const { value } = action.payload;

      if (state) {
        state[formName][inputName] = value;
      }
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { onChange } = formSlice.actions;

export default formSlice.reducer;
