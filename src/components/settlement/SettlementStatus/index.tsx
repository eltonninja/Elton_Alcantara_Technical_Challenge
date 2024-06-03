import { fetchSettlementStatusColor } from "@/core/lib/settlement/utils";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const SettlementStatus = () => {
  const status = useSelector((state: RootState) => state.settlement.status);
  return (
    <p className='mb-4 bg-slate-200 p-2 py-4 rounded-lg'>
      <span className='font-bold italic'>Settlement Status:</span>{" "}
      <span
        className='p-2 rounded-lg m-1'
        style={{
          background: fetchSettlementStatusColor(status),
        }}
      >
        {status}
      </span>
    </p>
  );
};

export default SettlementStatus;
