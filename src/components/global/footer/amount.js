import React from "react";

const Amount = ({ amount, totalSta }) => {
  return (
    <div>
      <p>total: {amount === 0 ? <b>$0</b> : <b>${totalSta}</b>}</p>
    </div>
  );
};

export default Amount;
