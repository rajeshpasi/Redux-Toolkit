import { useDispatch, useSelector} from "react-redux";
import { setActiveTabs } from "../utilities/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIF"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 justify-center mt-4">
      {tabs.map((elem, index) => (
        <button
          className={`${(activeTab === index) ? "bg-[#7692FF]" : "bg-[#1B2CC1]"} hover:bg-[#7692FF] hover:scale-105 text-white font-bold w-20 px-4 py-2 rounded cursor-pointer`}
          key={index}
          onClick={() => dispatch(setActiveTabs(index))}
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
