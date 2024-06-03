import { fetchSettlementStatusColor } from "@/core/lib/settlement/utils";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const SettlementAmount = () => {
  const amount = useSelector((state: RootState) => state.settlement.amount);
  return (
    <p className='mb-4 bg-slate-200 p-2 py-4 rounded-lg text-xl w-full'>
      <span className='font-bold text-slate-700'>Settlement Amount:</span>{" "}
      <span className='p-2 rounded-lg m-1 font-semibold'>{amount}</span>
    </p>
  );
};

export default SettlementAmount;
