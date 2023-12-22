import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./DragDrop";

const NewTask = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <DragDrop></DragDrop>
            </div>
        </DndProvider>
    );
};

export default NewTask;