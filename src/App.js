import { FakePost } from "./Components/FakePost/FakePost";
import { SellPost } from "./Components/SellPost/SellPost";
import { Offers } from "./Components/Offers/Offers";
import { PostSettings } from "./Components/PostSettings/PostSettings";
import { PostProvider } from "./Contexts/PostContext";
import "./App.css";

function App() {
  return (
    <div className="Content">
      <PostProvider>
        <div class="LeftSide">
          <PostSettings />
        </div>
        <div className="RightSide">
          <FakePost />
          <SellPost />
          <Offers />
        </div>
      </PostProvider>
    </div>
  );
}

export default App;
