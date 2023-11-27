import SelectGroup from "../SelectGroup/SelectGroup";
import TopSide from "../TopSide/TopSide";


const CreateGroupPage = () => {
    return (
        <div className="">
            <TopSide />
            <div className="block md:hidden mt-10">
            <SelectGroup />
            </div>
            <div className="mx-10  border-2 border-gray-500 h-96  md:h-[calc(100vh-200px)] md:w-[calc(100%-100px)] mt-16 flex items-center justify-center bg-gray-100">
                <p className="text-lg md:w-[560px] text-center">In Groups you can communicate with your team, share content, have fun and play together. Get started by creating your first group!</p>
            </div>
        </div>
    );
};

export default CreateGroupPage;