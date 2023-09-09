import SectionTitle from '../../../Components/SectionTitle';
import './Featured.css';

const Featured = () => {
  return (
    <div className="feature-item bg-fixed  text-white  my-20  ">
      <div className="bg-black bg-opacity-60 pt-8">
        <SectionTitle
          subHeading="check it out"
          heading="Feature Item"
        ></SectionTitle>

        <div className="md:flex justify-center items-center  pb-20 pt-12 px-36">
          <div>
            <img
              src="https://www.matrix.edu.au/wp-content/uploads/2020/07/blog-english-how-to-write-a-killer-feature-article-social-1.jpg"
              alt=""
            />
          </div>
          <div className="md:ml-10">
            <p> aug 20,2029</p>
            <p className="uppercase">Where can i get some ?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              reprehenderit obcaecati quod corporis. Est natus sed tenetur
              placeat iste minus, repellendus saepe fugit quisquam accusantium
              pariatur, adipisci inventore laudantium. Commodi.
            </p>
            <button className="btn btn-outline border-0 border-b-2">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
