import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";


const NewTask = () => {
    const axios = useAxios()
    const{user} = useAuth()

    // !tanStack query
    const {data:tasks}
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
            <div className="col border-r border-black pr-4">
                <h2 className="text-center font-bold text-2xl bg-red-700 p-3 rounded-lg text-white">To Do List</h2>
                
            </div>
            <div className="col border-r border-black pr-4" >
                <h2 className="text-center font-bold text-2xl bg-red-700 p-3 rounded-lg text-white">Ongoing Tasks</h2>
               
            </div>
            <div className="col" >
                <h2 className="text-center font-bold text-2xl bg-red-700 p-3 rounded-lg text-white">Completed Tasks</h2>
               
            </div>
        </div>
    );
};

export default NewTask;