"use client";
import React from "react";

const CommentInput = () => {
  return (
    <>
      <div className="flex flex-col gap-y-1 border border-gray-300 bg-slate-100 rounded-xl shadow-lg p-5">
        <div className="p-3 w-full bg-slate-50 rounded-xl shadow-lg border border-gray-300 flex flex-col gap-y-3 justify-center">
          <div>
            <h1 className="text-xl font-semibold underline text-center">Comment</h1>
          </div>
          <div>
            will be commented
          </div>
        </div>
        <div className="flex flex-row md:my-2">
          <div className="h-[2px] flex-1 bg-[#c4c6cb] rounded mx-10"></div>
        </div>
        <div>input</div>
      </div>
    </>
  );
};

export default CommentInput;
