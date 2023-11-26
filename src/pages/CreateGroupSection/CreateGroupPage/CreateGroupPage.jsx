import TopSide from "../TopSide/TopSide";


const CreateGroupPage = () => {
    return (
        <div>
            <TopSide />
            <div className="border-2 border-gray-500 h-96 w-screen md:h-[calc(100vh-200px)] md:w-[calc(100%-0px)] mt-16 flex items-center justify-center bg-gray-100">
                <p className="text-lg w-[600px] text-center">In Groups you can communicate with your team, share content, have fun and play together. Get started by creating your first group!</p>
            </div>
        </div>
    );
};

export default CreateGroupPage;