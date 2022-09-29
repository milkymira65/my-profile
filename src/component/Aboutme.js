import myImage from "../img/myImage.jpg";

function Aboutme() {
  return (
     <div>
        <div className = "  flex flex-col justify-center items-center text-zinc-400 text-[15px] " >Get to Know</div>
      <div className="flex flex-col justify-center items-center font-semibold  text-black text-[20px] m-5 ">About Me</div>

    
    <div className="flex flex-row justify-center items-center">
      
      <div className="flex flex-col justify-center items-center mr-[50px]">
        <div>
          <img className="w-[80px]" src="icon/workstation.png" alt="" />
        </div>
        <div className="text-violet-900 text-[20px] ">Skill</div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex">
            <img className=" w-[50px]" src="icon/html.png" alt="" />
            <img className=" w-[50px]" src="icon/css.png" alt="" />
            <img className=" w-[50px]" src="icon/javascript.png" alt="" />
          </div>
          <div className="flex">
            <img className=" w-[50px]" src="icon/nodejs.png" alt="" />
            <img className=" w-[50px]" src="icon/react.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mr-[50px]">
        <div>
          <img src="icon/reward.png" alt="" />
        </div>
        <div className="text-violet-900 text-[20px] ">Experience</div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex"></div>
          <div>-Plant tissue culture lab.</div>
          <div>-Sell insurance .</div>
          <div>-Coffee shop owner.</div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          <img src="icon/tech.png" alt="" />
        </div>
        <div className="text-violet-900 text-[20px] ">Education</div>
        <div>-Bachelor's degree Biotechnology</div>
        <div>-Maejo University. </div>
        <div>-Software developer TechUp Bootcamp</div>
      </div>
    </div>
    
    </div>
  );
}

export default Aboutme;
