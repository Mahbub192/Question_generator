import { FaListCheck, FaPeopleGroup, FaTrophy } from "react-icons/fa6";


const TopSide = () => {
    return (
        <div className="mt-10  w-[1200px]">
            <div className="flex justify-around items-center ">
                <div className="flex gap-16">
                    <div><h1 className="text-3xl"><FaPeopleGroup /></h1><h1 className="text-xl font-serif mt-2">Collaborate</h1></div>
                    <div><h1 className="text-3xl"><FaListCheck /></h1><h1 className="text-xl font-serif mt-2">Assign</h1></div>
                    <div><h1 className="text-3xl"><FaTrophy /></h1><h1 className="text-xl font-serif mt-2">Compete</h1></div>
                </div>
                <div>
                    <input type="text" className="border-2 px-5 py-1 rounded-md" placeholder="Search..." />
                </div>
                <div>
                    <button className="px-3 py-2 bg-blue-500 text-white text-lg font-bold">Create Group</button>
                </div>
            </div>
        </div>
    );
};

export default TopSide;