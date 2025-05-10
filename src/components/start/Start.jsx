import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="flex flex-col items-center gap-y-[34px] mt-[187px]">
      <h2 className="font-bold text-[#EFF9F3] text-[32px]">
        Start dog finder game
      </h2>
      <p className="w-full max-w-[398px] text-[#EFF9F3] text-center">
        You will have to choose an image of a dog from 5 total pictures, try to
        get the highest score
      </p>
      <Link to="/quiz">
        <button className="bg-[#33D570] rounded-[12px] w-[126px] h-[40px] text-[#FFFFFF] cursor-pointer">
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default Start;
