import myImage from "../img/myImage.jpg";


function Introduction() {
  return (
    <div className=" Aboutme flex flex-row  justify-evenly items-center">
      <p className=" m-20 text-indigo-900 text-[20px]  ">
        Hi! I'm Ornnutcha Tawana Software developer . I can coding with a clean
        and beautiful problem soving in mind . The journey of a thousand miles
        begins with one step.
      </p>
      
      <img
        className=" rounded-full  m-10 md:w-[35%] w-[20%] h-[20%] md:mb-10  "
        src={myImage}
        alt="profile"
      />

      <button className=""></button>
    </div>
  );
}

export default Introduction;
