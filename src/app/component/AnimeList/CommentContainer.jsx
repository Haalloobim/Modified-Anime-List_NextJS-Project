import React from "react";
import prisma from "@/services/prisma";
import CommentInput from "./CommentInput";

const CommentContainer = async ({
  mal_id,
  anime_title,
  user_name,
  user_email,
}) => {
  const commentDatas = await prisma.comment.findMany({
    where: {
      mal_id: mal_id,
    },
  });

  const col1 = commentDatas.filter((_, index) => index % 3 === 0);
  const col2 = commentDatas.filter((_, index) => index % 3 === 1);
  const col3 = commentDatas.filter((_, index) => index % 3 === 2);

  console.log({ col1, col2, col3 });

  return (
    <div className="flex flex-col gap-5 border border-gray-300 bg-slate-50 rounded-xl shadow-lg py-5 px-6 lg:px-3 mt-2">
      <div>
        <h1 className="text-xl font-semibold underline text-center">Comment</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="lg:w-[31%] md:w-full w-full  flex flex-col gap-4">
          {col1.map((comments, index) => {
            return (
              <div key={index} className="rounded-lg shadow-lg border border-gray-400 bg-white flex flex-col gap-y-1 py-3 px-5 text-gray-700 text-center">
                <h1 className="underline font-semibold text-base text-kuro">
                  {comments.user_name}
                </h1>
                <p className="text-justify text-[16px] italic">
                  {comments.comment}
                </p>
              </div>
            );
          })}
        </div>
        <div className="lg:w-[31%] md:w-full w-full  flex flex-col gap-4">
          {
          col2.map((comments, index) => {
            return (
              <div key={index} className="rounded-lg shadow-lg border border-gray-400 bg-white flex flex-col gap-y-1 py-3 px-5 text-gray-700 text-center">
                <h1 className="underline font-semibold text-base text-kuro">
                  {comments.user_name}
                </h1>
                <p className="text-justify text-[16px] italic">
                  {comments.comment}
                </p>
              </div>
            );
          })
          }
        </div>
        <div className="lg:w-[31%] md:w-full w-full  flex flex-col gap-4">
          {
          col3.map((comments, index) => {
            return (
              <div key={index} className="rounded-lg shadow-lg border border-gray-400 bg-white flex flex-col gap-y-1 py-3 px-5 text-gray-700 text-center">
                <h1 className="underline font-semibold text-base text-kuro">
                  {comments.user_name}
                </h1>
                <p className="text-justify text-[16px] italic">
                  {comments.comment}
                </p>
              </div>
            );
          })
          }
        </div>
      </div>
      <div className="flex flex-row md:my-2">
        <div className="h-[2px] flex-1 bg-[#c4c6cb] rounded mx-12"></div>
      </div>
      <CommentInput
        anime_title={anime_title}
        mal_id={mal_id}
        user_email={user_email}
        user_name={user_name}
      />
    </div>
  );
};

export default CommentContainer;
