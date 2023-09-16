import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";

const FeedCard = () => {
  return (
    <div className="border border-gray-500 border-r-0 border-b-0 border-l-0 p-4 hover:bg-slate-600 translate-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <img
            className="rounded-full w-3/4"
            src={"https://avatars.githubusercontent.com/u/99263040?v=4"}
            alt="avatar image"
          />
        </div>
        <div className="col-span-11">
          <h5>Esub Vali Sayyed</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            pariatur autem quod?
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 ">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
      FeedCard
    </div>
  );
};

export default FeedCard;
