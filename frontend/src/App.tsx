import { FaXTwitter } from "react-icons/fa6";
import { sidebarMenuItems } from "./components/SidebarMenuItems";
import FeedCard from "./components/FeedCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        <div className="col-span-3 border border-red-600 pt-4 text-2xl">
          <div className="hover:bg-gray-400 rounded-full p-2 text-2xl w-fit">
            <FaXTwitter />
          </div>
          <div className="mt-4 ">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start content-center text-2xl px-2 py-1 gap-2 hover:bg-gray-400 rounded-full w-fit"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-[#1d9bf0] p-1 rounded-full w-3/4 mt-4 ml-4">
            Post
          </button>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard /> <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 "></div>
      </div>
    </>
  );
}

export default App;
