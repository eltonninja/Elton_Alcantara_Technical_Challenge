const SETTLED_STATE = "Settled";
const DISPUTED_STATE = "Disputed";
const PENDING_STATE = "Pending";

export const SETTLEMENT_STATUSES = {
  settled: SETTLED_STATE,
  disputed: DISPUTED_STATE,
  pending: PENDING_STATE,
} as const;

export const SETTLEMENT_STATUSES_COLORS_MAPPER = {
  [SETTLED_STATE]: "#63f25e",
  [DISPUTED_STATE]: "#e82042",
  [PENDING_STATE]: "#c2bcbd",
};

export type SettlementStatus =
  (typeof SETTLEMENT_STATUSES)[keyof typeof SETTLEMENT_STATUSES];

const AMOUNT_KEY = "amount";
const AMOUNT_VISIBLE_KEY = "isAmountVisible";
const STATUS_KEY = "status";

export const REALTIME_VALUES = {
  amount: AMOUNT_KEY,
  amount_visible: AMOUNT_VISIBLE_KEY,
  status: STATUS_KEY,
};

export type RealtimeValues =
  (typeof REALTIME_VALUES)[keyof typeof REALTIME_VALUES];
