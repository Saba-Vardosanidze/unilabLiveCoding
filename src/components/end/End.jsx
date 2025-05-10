import { Link } from "react-router-dom";
const End = () => {
  return (
    <div className="flex flex-col items-center gap-y-[34px] mt-[187px]">
      <h2 className="font-bold text-[#EFF9F3] text-[32px]">Congratulations!</h2>
      <p className="text-[#EFF9F3] text-center">You have scored 15 in 15:00</p>
      <Link to="/">
        <button className="bg-[#33D570] rounded-[12px] w-[126px] h-[40px] text-[#FFFFFF] cursor-pointer">
          Try again
        </button>
      </Link>
    </div>
  );
};

export default End;
