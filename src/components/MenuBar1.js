import { useNavigate } from "react-router-dom";

const MenuBar1 = () => {
  let navigate = useNavigate()
  return (
    <section className=" self-stretch h-[138px] flex flex-row items-start justify-start pt-0 pb-[50px] pr-0.5 pl-0 box-border top-[0] z-[99] sticky max-w-full">
      <header className="self-stretch flex-1 bg-white shadow-[0px_-1px_0px_#ececf5_inset] flex flex-row items-end justify-start pt-[14.5px] pb-[13px] pr-[45px] pl-[35px] box-border gap-[203px] max-w-full mq450:gap-[203px_51px] mq725:gap-[203px_101px] mq725:pr-[22px] mq725:box-border">
        <div className="self-stretch flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
          <img
            className="h-[60.5px] w-[180px] relative object-cover"
            loading="lazy"
            alt=""
            src="/readingeupheuslogo-1@2x.png"
          />
          <nav className="m-0 w-[475px] flex flex-col items-start justify-end pt-0 px-0 pb-[11.5px] box-border max-w-full mq1000:hidden mq450:w-0">
            <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[12.9px] text-left text-base text-gray-400 font-mulish mq450:hidden">
              <div className="hover:cursor-pointer  hover:bg-blue-200 w-[81.2px] rounded flex flex-row items-start justify-start py-0 pr-[15.7px] pl-4 box-border">
                <div className="flex-1 relative leading-[36px]">Home</div>
              </div>
              <div className="hover:cursor-pointer  hover:bg-blue-200 rounded flex flex-row items-start justify-start py-0 pr-3.5 pl-4">
                <div className="relative leading-[36px] whitespace-nowrap">
                  School Registration
                </div>
              </div>
              <div className="hover:cursor-pointer  hover:bg-blue-200 rounded flex flex-row items-start justify-start py-0 pr-[15px] pl-4">
                <div className="relative leading-[36px] whitespace-nowrap">
                  Student Registration
                </div>
              </div>
            </nav>
          </nav>
        </div>
        <div className="w-[117.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
          <button onClick={()=>{navigate('/studentsignup')}} className="cursor-pointer [border:none] py-0 pr-[15.7px] pl-4 bg-mediumblue self-stretch rounded flex flex-row items-start justify-start hover:bg-mediumslateblue">
            <div className="flex-1 relative text-base leading-[36px] font-mulish text-white text-center">
              Register
            </div>
          </button>
        </div>
      </header>
    </section>
  );
};

export default MenuBar1;
