import "./PostSettings.css";
import { usePostContext } from "../../Contexts/PostContext";

export const PostSettings = () => {
  const { postData, setPostData } = usePostContext();

  return (
    <div className="PostSettings">
      <h5>Post Settings</h5>
      <label>Image URL</label>
      <input
        type="text"
        placeholder={postData.image}
        onChange={(e) => setPostData({ ...postData, image: e.target.value })}
      />
      <label>Username</label>
      <input
        type="text"
        placeholder={postData.username}
        onChange={(e) => setPostData({ ...postData, username: e.target.value })}
      />
      <label>Nickname</label>
      <input
        type="text"
        placeholder={postData.nickname}
        onChange={(e) => setPostData({ ...postData, nickname: e.target.value })}
      />
      <label>Post Text</label>
      <textarea
        type="text"
        placeholder="Post Text"
        rows="10"
        onChange={(e) => setPostData({ ...postData, postText: e.target.value })}
      >
        {postData.postText}
      </textarea>
      <label>Time</label>
      <input
        type="text"
        placeholder={postData.time}
        onChange={(e) => setPostData({ ...postData, time: e.target.value })}
      />
      <label>Date</label>
      <input
        type="text"
        placeholder={postData.date}
        onChange={(e) => setPostData({ ...postData, date: e.target.value })}
      />
      <label>Like Amount</label>
      <input
        type="text"
        placeholder={postData.likeAmount}
        onChange={(e) =>
          setPostData({ ...postData, likeAmount: e.target.value })
        }
      />
      <label>Comment Amount</label>
      <input
        type="text"
        placeholder={postData.commentAmount}
        onChange={(e) =>
          setPostData({ ...postData, commentAmount: e.target.value })
        }
      />
      <label>Is Certified (yes / no)</label>
      <input
        type="text"
        placeholder={postData.isCertified}
        onChange={(e) =>
          setPostData({ ...postData, isCertified: e.target.value })
        }
      />
    </div>
  );
};
