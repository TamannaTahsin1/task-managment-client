
const CreateTask = () => {
    return (
        <div>
            
            <div
        className='max-w-[1200px] mx-auto mt-20'
        data-aos='fade-up'
        data-aos-duration='500'>
        <div className='  p-20 '>
          <h2 className='text-4xl font-extrabold bg-gradient-to-r from-red-100 via-red-700 to-orange-700 text-transparent bg-clip-text text-center mb-10'>
            Create New Task
          </h2>
          <form >
    
            {/* form subject name and image row */}
            <div className='md:flex gap-3'>
              <div className='form-control md:w-1/2'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <label className='input-group'>
                  <input
                    name='title'
                    type='text'
                    placeholder='Task Title'
                    className='input input-bordered w-full'
                  />
                </label>
              </div>
              <div className='form-control md:w-1/2'>
                <label className='label'>
                  <span className='label-text'>Description</span>
                </label>
                <label className='input-group'>
                  <input
                    name='description'
                    type='text'
                    placeholder='Task Description'
                    className='input input-bordered w-full'
                  />
                </label>
              </div>
            </div>
            {/* form details and price row */}
            <div className='md:flex gap-3 mb-5'>
              <div className='form-control md:w-1/2'>
                <label className='label'>
                  <span className='label-text'>Deadlines</span>
                </label>
                <label className='input-group'>
                  <input
                    name='deadlines'
                    type='date'
                    defaultValue={status}
                    className='input input-bordered w-full'
                  />
                </label>
              </div>
              <div className='form-control md:w-1/2'>
                <label className='label'>
                  <span className='label-text'>Priority</span>
                </label>
                <label className='input-group'>
                  <input
                    name='priority'
                    type='text'
                    placeholder='Priority'
                    className='input input-bordered w-full'
                  />
                </label>
              </div>
            </div>
            <div>
              <input
                type='submit'
                value='Add Task'
                className='btn border-none bg-red-700 text-white w-full'
              />
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default CreateTask;