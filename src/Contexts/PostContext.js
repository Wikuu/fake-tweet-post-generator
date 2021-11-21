import { useState, createContext, useContext } from "react";

const PostContext = createContext();

export const PostProvider = (props) => {
  const [postData, setPostData] = useState({
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    username: "username",
    nickname: "nickname",
    postText: "Enter some post text",
    time: "15:15",
    date: "Nov 21, 2021",
    likeAmount: 0,
    commentAmount: 0,
    isCertified: "no",
  });

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {props.children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
