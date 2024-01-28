"use client";
import { ArrowBendDownRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ mal_id, anime_title, user_name, user_email }) => {
  let urlApi = "/api/v1/comment";

  const [comment, setComment] = useState("");
  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedData = {
      mal_id,
      anime_title,
      user_name,
      user_email,
      comment,
    };

    const res = await fetch(urlApi, {
      method: "POST",
      body: JSON.stringify(storedData),
    });

    const commentData = await res.json();
    console.log({ commentData });

    if (commentData.isCreated) {
      setIsCommentAdded(commentData.isCreated);
      setComment("");
      router.refresh();
    }

    console.log(comment);
  };

  return (
    <>
        <div className="flex flex-row gap-x-2 justify-center">
          <textarea
            id="chat"
            rows="1"
            value={comment}
            class="block p-[11px] w-5/6 text-[15px] items-center text-gray-900 bg-white rounded-lg border border-gray-300 resize-none placeholder:text-gray-400 "
            placeholder="comments here..."
            onChange={handleInput}
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            class="flex flex-row items-center gap-x-1 px-3 text-sm
              border border-gray-400 bg-white rounded-xl shadow-md text-gray-700
              hover:text-gray-50 hover:bg-gray-700 transition-all hover:-translate-y-[2px] duration-100"
          >
            Submit
            <ArrowBendDownRight size={12} weight="bold" />
          </button>
        </div>
        {
          isCommentAdded ? 
          (
            <div className=" flex justify-center italic text-sm text-slate-600">
              Comment has been posted !
            </div>
          ) 
          : null
        }
    </>
  );
};

export default CommentInput;
