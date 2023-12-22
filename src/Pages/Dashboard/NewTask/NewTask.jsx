import { useLoaderData } from "react-router-dom";
import NewTaskCard from "./NewTaskCard";


const NewTask = () => {
    const tasks = useLoaderData();

    return (
        <div className="max-w-[1200px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
         <h2 className="text-white text-center text-6xl">New{tasks.length}</h2>
         <div className="card w-96 bg-base-100 shadow-xl">
 
</div>
<div>
    {
        tasks?.map(task =><NewTaskCard
        key={task._id} task={task}></NewTaskCard>)
    }
</div>
        </div>
    );
};

export default NewTask;