import "./FakePost.css";
import { usePostContext } from "../../Contexts/PostContext";

export const FakePost = () => {
  const { postData, setPostData } = usePostContext();
  return (
    <div className="FakePost">
      <div className="FakePostTop">
        <div className="User">
          <img src={postData.image} alt="user" />
          <div className="UserInformation">
            <div className="UserName">
              <h5>{postData.username}</h5>
              {postData.isCertified === "yes" ? (
                <i className="fas fa-badge-check CertifiedIcon"></i>
              ) : null}
            </div>
            <p>@{postData.nickname}</p>
          </div>
        </div>
        <div className="TwitterIcon">
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className="FakePostBody">
        <div class="Post">{postData.postText}</div>
        <div class="PostDateInformation">
          <span>{postData.time}</span> {postData.date}
        </div>
      </div>
      <div className="FakePostFoot">
        <div className="PostActionCounts">
          <a href="/">
            <i className="far fa-heart"></i>
          </a>
          <p>{postData.likeAmount}</p>
        </div>
        <div className="PostActionCounts">
          <a href="/">
            <i className="far fa-comment"></i>
          </a>
          <p>{postData.commentAmount}</p>
        </div>
      </div>
    </div>
  );
};
