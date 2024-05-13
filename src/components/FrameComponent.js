const FrameComponent = ({
  heading2MostPopularFeatur,
  level1coverpng2x2,
  level1coverpng2x21,
  level1coverpng2x22,
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2.5 pr-[7px] pl-0 box-border max-w-full text-center text-23xl text-gray-400 font-mulish">
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
        <div className="w-[190px] relative leading-[50px] font-semibold flex items-center justify-center z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
          {heading2MostPopularFeatur}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
          <div className="flex-1 grid flex-row items-start justify-start max-w-full grid-cols-[repeat(3,_minmax(304px,_1fr))] mq750:grid-cols-[minmax(304px,_1fr)] mq1050:[grid-row-gap:20px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(304px,_526px))]">
            <div className="h-[534px] relative rounded-lg bg-white box-border overflow-hidden max-w-full z-[1] border-[1px] border-solid border-ghostwhite">
              <img
                className="absolute top-[14px] left-[16px] w-[374px] h-[490px] object-cover"
                loading="lazy"
                alt=""
                src={level1coverpng2x2}
              />
            </div>
            <div className="h-[534px] relative rounded-lg bg-white box-border overflow-hidden max-w-full z-[2] border-[1px] border-solid border-ghostwhite">
              <img
                className="absolute top-[14px] left-[16px] w-[374px] h-[490px] object-cover"
                alt=""
                src={level1coverpng2x21}
              />
            </div>
            <div className="h-[534px] relative rounded-lg bg-white box-border overflow-hidden max-w-full z-[3] border-[1px] border-solid border-ghostwhite">
              <img
                className="absolute top-[14px] left-[16px] w-[374px] h-[490px] object-cover"
                alt=""
                src={level1coverpng2x22}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
