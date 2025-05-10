import { useQuery } from "@tanstack/react-query";
import { dogAndCat } from "../../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Quiz = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(100);
  const { data, isLoading, error } = useQuery({
    queryKey: ["catImg"],
    queryFn: dogAndCat,
  });
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  }, []);
  const scoreClick = (selecte, correct) => {
    if (selecte === correct) {
      setScore((prev) => prev + 1);
    }
  };
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;
  //   if (time === 0) return alert("quiz End");

  return (
    <div className="m-auto mt-[187px] w-full max-w-[1440px]">
      <div className="flex flex-wrap gap-[48px] max-w-[1142px]">
        {data.map((eachElement) => (
          <img
            onClick={() => scoreClick(eachElement, eachElement.url.dog)}
            className="w-[190px] h-[190px] cursor-pointer"
            src={eachElement.url}
            alt="dogCanImgs"
          />
        ))}
      </div>
      <div className="flex flex-col gap-[17px] mt-[47px]">
        <p className="text-[#EFF9F3]">score:{score}</p>
        <p className="text-[#EFF9F3]"> Time:{time}</p>
        <Link to="/end">
          <button className="bg-[#33D570] rounded-[12px] w-[126px] h-[40px] text-[#FFFFFF] cursor-pointer">
            Finish Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quiz;
