import {
  REALTIME_VALUES,
  RealtimeValues,
  SETTLEMENT_STATUSES,
  SETTLEMENT_STATUSES_COLORS_MAPPER,
  SettlementStatus,
} from "@/core/constants/settlement";

export const showRestartCta = (status: SettlementStatus) => {
  return (
    status === SETTLEMENT_STATUSES.settled ||
    status === SETTLEMENT_STATUSES.disputed
  );
};

export const isRealtimeEvent = (e: string): e is RealtimeValues => {
  return Object.values(REALTIME_VALUES).includes(e as RealtimeValues);
};

export const fetchSettlementStatusColor = (status: SettlementStatus) => {
  return SETTLEMENT_STATUSES_COLORS_MAPPER[status];
};
