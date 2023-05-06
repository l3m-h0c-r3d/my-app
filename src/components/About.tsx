import img from "../assets/images/checkbox-circle-fill.svg";
interface Abouts {
  title: string;
  text: string;
}

const About: React.FC<Abouts> = (props) => {
  return (
    <div className="md:w-full sm:mx-auto px-5 rounded-lg my-10 w-full border-2 border-cyan-50 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mr-3">
      <div className="w-full">
        <img className=" shadow-sm" src={img} />
      </div>
      <div className="text-left-100 shadow-sm">
        <h1 className="w-full content-start font-bold p-1">{props.title}</h1>
        <p className="sm:w-full md:w-full shadow-xl">{props.text}</p>
      </div>
    </div>
  );
};

export default About;
