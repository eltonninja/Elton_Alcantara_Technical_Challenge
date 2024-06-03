"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmount,
  loadStateFromStorage,
  resetSettlement,
} from "@/store/features/settlement-slice";
import { RootState } from "@/store/store";
import {
  REALTIME_VALUES,
  SETTLEMENT_STATUSES,
} from "@/core/constants/settlement";
import {
  fetchSettlementStatusColor,
  showRestartCta,
} from "@/core/lib/settlement/utils";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import SettlementStatus from "@/components/settlement/SettlementStatus";
import InfoNotification from "@/components/common/Notification";
import SettlementAmount from "@/components/settlement/SettlementAmount";

export default function PartyA() {
  const [inputAmount, setInputAmount] = useState("");
  const dispatch = useDispatch();
  const amount = useSelector((state: RootState) => state.settlement.amount);
  const status = useSelector((state: RootState) => state.settlement.status);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    dispatch(loadStateFromStorage());

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === REALTIME_VALUES.status) {
        setNotification(
          "Please reload the page as Party B has put a response."
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountValue = parseFloat(inputAmount);
    if (!isNaN(amountValue)) {
      dispatch(setAmount(amountValue));
      setInputAmount("");
    }
  };

  const handleRestart = () => {
    dispatch(resetSettlement());
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-bold mb-4'>Dashboard - Party A</h1>
      <div className='container mx-auto text-center p-4 w-6/12 bg-gray-100 shadow-xl shadow-gray-300 rounded-xl'>
        <SettlementStatus />
        {notification && <InfoNotification description={notification} />}
        {status === SETTLEMENT_STATUSES.settled && (
          <p className='text-green-500 text-2xl font-bold mb-4'>
            Congratulations! The settlement is agreed.
          </p>
        )}
        {status !== SETTLEMENT_STATUSES.settled && (
          <div className='flex flex-col space-y-4'>
            <Input
              type='number'
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              label='Enter settlement amount'
              id='settlementAmount'
            />
            {amount !== null && <SettlementAmount />}
            <Button onClick={handleSubmit}>Submit Amount</Button>
          </div>
        )}

        {showRestartCta(status) && (
          <button
            onClick={handleRestart}
            className='px-4 py-2 bg-red-500 text-white rounded mt-4'
          >
            Restart Settlement
          </button>
        )}
      </div>
    </div>
  );
}
