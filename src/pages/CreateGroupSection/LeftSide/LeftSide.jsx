

const LeftSide = () => {
    return (
        <div className="border-2 px-5 h-screen">
            <ul>
                <li className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">Owned Groups</li>
                <li className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">Joined Groups</li>
                <div><h1 className="pl-5 text-xl font-semibold font-seri2 my-5">Recent Groups</h1></div>
                <li className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">New Groups</li>
                <li className="text-lg font-medium bg-gray-200 hover:bg-gray-500 hover:text-white py-3 mt-3 pl-5 rounded-md">Create Group +</li>
            </ul>
        </div>
    );
};

export default LeftSide;