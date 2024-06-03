"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  toggleAmountVisibility,
  loadStateFromStorage,
  agreeSettlement,
  disputeSettlement,
} from "@/store/features/settlement-slice";
import { SETTLEMENT_STATUSES } from "@/core/constants/settlement";
import { isRealtimeEvent } from "@/core/lib/settlement/utils";
import SettlementStatus from "@/components/settlement/SettlementStatus";
import Button from "@/components/common/Button";
import SettlementAmount from "@/components/settlement/SettlementAmount";

export default function PartyB() {
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) => state.settlement.amount);
  const isAmountVisible = useSelector(
    (state: RootState) => state.settlement.isAmountVisible
  );
  const status = useSelector((state: RootState) => state.settlement.status);

  useEffect(() => {
    dispatch(loadStateFromStorage());

    const handleStorageChange = (e: StorageEvent) => {
      if (isRealtimeEvent(e.key || "")) {
        dispatch(loadStateFromStorage());
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  const handleViewClick = () => {
    dispatch(toggleAmountVisibility());
  };

  const handleAgreeClick = () => {
    dispatch(agreeSettlement());
  };

  const handleDisputeClick = () => {
    dispatch(disputeSettlement());
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-bold mb-4'>Dashboard - Party B</h1>
      <div className='container mx-auto text-center p-4 w-6/12 bg-gray-100 shadow-xl shadow-gray-300 rounded-xl'>
        <SettlementStatus />
        <div className='flex flex-col items-center justify-center space-y-4'>
          {isAmountVisible && amount !== null ? (
            <>
              <SettlementAmount />
              {status === SETTLEMENT_STATUSES.pending && (
                <div className='flex flex-col items-center justify-center space-y-4'>
                  <Button onClick={handleAgreeClick} variant='filled'>
                    Agree
                  </Button>
                  <Button onClick={handleDisputeClick}>Dispute</Button>
                </div>
              )}
            </>
          ) : (
            <>{amount === null && <> No amount is punched. </>}</>
          )}
          {amount !== null && (
            <Button onClick={handleViewClick}>
              {isAmountVisible ? "Hide" : "View"} Settlement Amount
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
