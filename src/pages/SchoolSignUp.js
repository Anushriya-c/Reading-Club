import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUpFormSchool from "../components/SignUpFormSchool";

const SchoolSignUp = () => {
  return (
    <div className="w-full  bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[44px] tracking-[normal] mq725:gap-[22px_44px]">
      <img
        className="w-full h-[450px] absolute !m-[0] top-[88px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/rectangle@2x.png"
      />
      <Header name={"Login"} highlight={'schlreg'}/>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
        <SignUpFormSchool />
      </section>
      <Footer />
    </div>
  );
};

export default SchoolSignUp;
