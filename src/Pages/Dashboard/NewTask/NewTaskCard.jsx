import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { useDrag } from "react-dnd";

// eslint-disable-next-line react/prop-types
const NewTaskCard = ({task}) => {
    const {_id,title, description,deadlines,priority} = task || {};
    const axios = useAxios();
    const {user} = useAuth();

    const { data: tasks = [], } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`/tasks?email=${user.email}`);
            return res.data;
        }      
    });
    console.log(tasks);
    // !drag and drop tasks
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div ref={drag}
            style={{ border: isDragging ? "5px solid red" : "0px" }}
            className="m-6 rounded-lg p-5">
            
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p className="text-xl">Title: {title}</p>
    <p>Description:{description}</p>
    <p>Deadline:{deadlines}</p>
    <p>Priority:{priority}</p>
  </div>
</div>
       
       

        </div>
    );
};

export default NewTaskCard;