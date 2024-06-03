import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SETTLEMENT_STATUSES,
  SettlementStatus,
} from "@/core/constants/settlement";

interface SettlementState {
  amount: number | null;
  isAmountVisible: boolean;
  status: SettlementStatus;
}

const initialState: SettlementState = {
  amount: null,
  isAmountVisible: false,
  status: SETTLEMENT_STATUSES.pending,
};

const settlementSlice = createSlice({
  name: "settlement",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      state.status = SETTLEMENT_STATUSES.pending;
      localStorage.setItem("amount", JSON.stringify(action.payload));
      localStorage.setItem(
        "status",
        JSON.stringify(SETTLEMENT_STATUSES.pending)
      );
    },
    toggleAmountVisibility: (state) => {
      state.isAmountVisible = !state.isAmountVisible;
      localStorage.setItem(
        "isAmountVisible",
        JSON.stringify(state.isAmountVisible)
      );
    },
    setAmountVisibility: (state, action: PayloadAction<boolean>) => {
      state.isAmountVisible = action.payload;
      localStorage.setItem("isAmountVisible", JSON.stringify(action.payload));
    },
    agreeSettlement: (state) => {
      state.status = SETTLEMENT_STATUSES.settled;
      localStorage.setItem(
        "status",
        JSON.stringify(SETTLEMENT_STATUSES.settled)
      );
    },
    disputeSettlement: (state) => {
      state.amount = null;
      state.status = SETTLEMENT_STATUSES.disputed;
      localStorage.setItem("amount", JSON.stringify(null));
      localStorage.setItem(
        "status",
        JSON.stringify(SETTLEMENT_STATUSES.disputed)
      );
    },
    loadStateFromStorage: (state) => {
      const storedAmount = localStorage.getItem("amount");
      const storedVisibility = localStorage.getItem("isAmountVisible");
      const storedStatus = localStorage.getItem("status");
      if (storedAmount !== null) {
        state.amount = JSON.parse(storedAmount);
      }
      if (storedVisibility !== null) {
        state.isAmountVisible = JSON.parse(storedVisibility);
      }
      if (storedStatus !== null) {
        state.status = JSON.parse(storedStatus) as SettlementStatus;
      } else {
        state.status = SETTLEMENT_STATUSES.pending;
      }
    },
    resetSettlement: (state) => {
      state.amount = null;
      state.isAmountVisible = false;
      state.status = SETTLEMENT_STATUSES.pending;
      localStorage.setItem("amount", JSON.stringify(null));
      localStorage.setItem("isAmountVisible", JSON.stringify(false));
      localStorage.setItem(
        "status",
        JSON.stringify(SETTLEMENT_STATUSES.pending)
      );
    },
  },
});

export const {
  setAmount,
  toggleAmountVisibility,
  setAmountVisibility,
  agreeSettlement,
  disputeSettlement,
  loadStateFromStorage,
  resetSettlement,
} = settlementSlice.actions;
export const settlementReducer = settlementSlice.reducer;
