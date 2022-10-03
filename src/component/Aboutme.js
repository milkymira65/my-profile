import myImage from "../img/myImage.jpg";

function Aboutme() {
  return (
    <div>
      <div className="  flex  flex-col justify-center items-center text-zinc-400 text-[15px]  ml-10">
        Get to Know
      </div>
      <div className="flex flex-col justify-center items-center font-semibold  text-black text-[30px] m-10 ">
        About Me
      </div>

      <div className="flex flex-row justify-around  items-start">
        <div className="flex flex-col justify-center items-start  ml-10 w-25">
          <div>
            <img className="w-[80px]" src="icon/workstation.png" alt="skill" />
          </div>
          <div className="text-violet-900 text-[25px] m-5 ">Skill</div>
          <div className="flex flex-col justify-center items-center  md:w-[32%]  w-[30%] h-[30%]">
            <div className="flex">
              <img
                className="  md:w-[48%] w-[30%] h-[30%] m-2"
                src="icon/html.png"
                alt="html"
              />
              <img
                className="  md:w-[48%] w-[30%] h-[30%] m-2"
                src="icon/css.png"
                alt="css"
              />
              <img
                className="  md:w-[80%] w-[50%] h-[50%] m-2"
                src="icon/javascript.png"
                alt="java script"
              />
            </div>
            <div className="flex">
              <img
                className="  md:w-[48%] w-[30%] h-[30%]  m-2"
                src="icon/nodejs.png"
                alt="nodejs"
              />
              <img
                className=" md:w-[48%] w-[30%] h-[30%] m-2 "
                src="icon/react.png"
                alt="react"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start md:w-[56%] w-[30%] h-[30%]  md:ml-[5px] ml-[5px] ">
          <div>
            <img className="w-[80px]" src="icon/reward.png" alt="experience" />
          </div>
          <div className="text-violet-900 text-[25px] md:w-[32%] w-[30%] h-[30%]  flex-col justify-center  m-5">
            Experience
          </div>
          <div className="  md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Plant tissue culture lab.
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Sell insurance.
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            - Autodesk 3D Max.
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Coffee shop owner.
          </div>
        </div>

        <div className="flex flex-col justify-center items-start md:w-[56%] w-[30%] h-[30%]  md:ml-[5px] ml-[5px] ">
          <div>
            <img
              className="w-[80px]"
              src="icon/anoterjob.png"
              alt="experience"
            />
          </div>
          <div className="text-violet-900 text-[25px] md:w-[32%] w-[30%] h-[30%]  flex-col justify-center  m-5">
            special event
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Taiwan.
          </div>
          <div className="  md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Malaysia.
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Singapore.
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Korea.
          </div>
        </div>

        <div className="flex flex-col justify-center items-start md:w-[56%] w-[30%] h-[30%]  md:ml-[5px] ml-[5px] ">
          <div>
            <img className="w-[80px]" src="icon/tech.png" alt="education" />
          </div>
          <div className="text-violet-900 text-[25px] md:w-[32%] w-[30%] h-[30%]  flex-col justify-center  m-5">
            Education
          </div>
          <div className="  md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Bachelor's degree Biotechnology
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Maejo University.{" "}
          </div>
          <div className="md:w-[56%] w-[30%] h-[30%]  text-[20px]  m-2">
            -Software developer TechUp Bootcamp
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
