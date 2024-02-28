import { useDispatch, useSelector } from "react-redux";

export const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  return (
    <div className="flex space-x-4 items-center">
      <select className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none">
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>
      <button className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded">
        Mark All Complated
      </button>
    </div>
  );
};
