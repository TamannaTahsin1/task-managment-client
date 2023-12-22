import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import NewTaskCard from "./NewTaskCard";
import { useState } from "react";
import { useDrop } from "react-dnd";

const DragDrop = () => {
    const axios = useAxios();
    const { user} = useAuth();
    const [changeBoard, setChangeBoard] = useState([])

    // !using tanStack query
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    });
    // !filter all tasks
    const todoTasks = tasks.filter(task => task.status === 'todo');
    const ongoingTasks = tasks.filter(task => task.status === 'ongoing');
    const completedTasks = tasks.filter(task => task.status === 'completed');

    //! drag and drop
    const [{ isFinish }, dropOngoingTask] = useDrop(() => ({
        accept: "div",
        drop: (task) => handleDropOngoing(task._id, 'ongoing'),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const [{ isOver }, dropCompletedTask] = useDrop(() => ({
        accept: "div",
        drop: (task) => handleDropOngoing(task._id, 'ongoing'),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const handleDropOngoing =async (taskId, status) =>{
        const onGoingTask = tasks.find((task) => taskId === task._id);

        await axios.put(`/tasks/${taskId}`, { status });

        if (status === 'ongoing') {
            setChangeBoard((changeBoard) => [...changeBoard, onGoingTask]);
        } else if (status === 'completed') {
            setChangeBoard((changeBoard) => changeBoard.filter((task) => task._id !== taskId));
        }

        refetch();
    }
    return (
        <>
          <div className="col border-r border-black pr-4">
                <h2 className="text-center font-bold text-2xl p-2  text-red-700">To Do List</h2>
                {
                    todoTasks?.map(task =>
                        <NewTaskCard key={task._id} task={task}></NewTaskCard>
                    )
                }
            </div>
            <div className="col border-r border-black pr-4" ref={dropOngoingTask}>
                <h2 className="text-center font-bold text-2xl p-2   text-yellow-500">Ongoing Tasks</h2>
                {
                    ongoingTasks?.map(task =>
                        <NewTaskCard key={task._id} task={task}></NewTaskCard>
                    )
                }
            </div>
            <div className="col" ref={dropCompletedTask}>
                <h2 className="text-center font-bold text-2xl p-2 text-green-600">Completed Tasks</h2>
                {
                    completedTasks?.map(task =>
                        <NewTaskCard key={task._id} task={task}></NewTaskCard>
                    )
                }
            </div>
        </>
    );
};

export default DragDrop;