import React from "react";

const Page = async () => {
  const user = await authUserSession();
  console.log(user);

  return(
    <div>
        
    </div>
  );
};

export default Page;
