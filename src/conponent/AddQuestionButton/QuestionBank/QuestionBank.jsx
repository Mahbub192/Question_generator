import { useForm } from "react-hook-form";

const QuestionBank = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-10  w-[300px] md:w-full pl-10 md:pl-0 h-[500px]">
      <form onSubmit={handleSubmit(onSubmit)} className="md:flex justify-around ">
        <input  className="input input-bordered" defaultValue="test" {...register("example")} />
        <div className="mt-5 md:mt-0 w-52 md:w-32">
        <select {...register("gender")} className="input input-bordered w-full">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
        </div>
        <div className="mt-5 md:mt-0 w-52 md:w-32">
        <select {...register("gender")}  className="input input-bordered w-full">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
        </div>
        <input className="bg-blue-500 text-white px-10 md:px-4 py-2 rounded-lg text-lg shadow-2xl my-10 md:my-0" type="submit" />
      </form>
    </div>
  );
};

export default QuestionBank;
