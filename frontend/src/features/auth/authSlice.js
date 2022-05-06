import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// GET USER FROM LOCAL STORAGE
const user = JSON.parse(localStorage.getItem("user"));

// CREATE INTIAL STATE
const initialState = {
  user: user ? user : null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "",
};

// REGISTER USER
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);

      //
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// LOGIN USER
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);

    //
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// LOGOUT USER
export const logout = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

// CREATE A SLICE
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSucces = false;
      state.message = "";
    },
  },
  //   HANDLE ASYNC STUFF USING extraReducers
  extraReducers: (builder) => {
    builder

      // REGISTER CASE
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      //  LOGIN CASE
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      //   LOGOUT CASE
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

// EXPORT SLICE ACTION
export const { reset } = authSlice.actions;

// EXPORT SLICE REDUCER
export default authSlice.reducer;
