import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CreateTask = () => {
  const handleTask = e =>{
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadlines = form.deadlines.value;
    const priority = form.priority.value;

    const createNewTask = {title, description, deadlines, priority}
    console.log(createNewTask);
    //! Send data to the server
    fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(createNewTask)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been added successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div>
      <div
        className="max-w-[1200px] mx-auto mt-20"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="  p-20 ">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-100 via-red-700 to-orange-700 text-transparent bg-clip-text text-center mb-10">
            Create New Task
          </h2>
          <form onSubmit={handleTask}>
            {/* form subject name and image row */}
            <div className="md:flex gap-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <label className="input-group">
                  <input
                    name="title"
                    type="text"
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    name="description"
                    type="text"
                    placeholder="Task Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* form details and price row */}
            <div className="md:flex gap-3 mb-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Deadlines</span>
                </label>
                <label className="input-group">
                  <input
                    name="deadlines"
                    type="date"
                    defaultValue={status}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>
                <label className="input-group">
                  <input
                    name="priority"
                    type="text"
                    placeholder="Priority"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Add Task"
                className="btn border-none bg-red-700 text-white w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
