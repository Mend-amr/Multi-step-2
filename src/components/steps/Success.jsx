import React from "react";

export const Success = () => {
  return (
    <div className="flex flex-col justify-between p-8 bg-white rounded-lg">
      <button onClick={() => window.location.reload()}>Reset</button>
      <div>
        <img className="w-15 h-15" src="./pinecone.png" alt="" />
      </div>
      <h2 className="text-[26px] font-bold">You're All Set 🔥</h2>
      <p className="text-[18px] text-gray-400">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
