import { useForm } from "react-hook-form";

const QuestionBank = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-10 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-around">
        <input  className="input input-bordered" defaultValue="test" {...register("example")} />
        <div>
        <select {...register("gender")} className="input input-bordered">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
        </div>
        <div>
        <select {...register("gender")}  className="input input-bordered">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
        </div>
        <input className="bg-blue-500 text-white px-4 rounded-lg text-lg shadow-2xl" type="submit" />
      </form>
    </div>
  );
};

export default QuestionBank;
