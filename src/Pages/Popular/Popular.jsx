import popular1 from '../../assets/img/p-1.jpg'
import popular2 from '../../assets/img/p-2.jpg'
import popular3 from '../../assets/img/p-3.jpg'
import popular4 from '../../assets/img/p-4.jpg'
const Popular = () => {
  return (
    <div className='container mx-auto my-20'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-red-700">
      <div className="card w-80 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={popular2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={popular3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={popular1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
 
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={popular4}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
   
        </div>
      </div>
    </div>
    </div>
  );
};

export default Popular;
