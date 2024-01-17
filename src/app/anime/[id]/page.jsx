import React from "react";

const Page = async ({ params }) => {
  const { id } = params;

  return (
    <>
      <div className="flex flex-col">
        <h1>Anime with ID : {id}</h1>
      </div>
    </>
  );
};

export default Page;
