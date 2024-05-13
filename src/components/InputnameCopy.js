import { useMemo } from "react";

const InputnameCopy = ({ exIconeye, propDisplay }) => {
  const accessibilityStatementComponStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[11.9px] pb-[9.3px] pr-[9px] pl-[16.8px] max-w-full shrink-0 z-[2] text-left text-2xs-3 text-dimgray font-zen-kaku-gothic-antique border-[1px] border-solid border-gainsboro">
      <div className="w-[381px] h-[69px] relative bg-white box-border hidden max-w-full z-[1] border-[1px] border-solid border-gainsboro" />
      <div className="relative leading-[19px] font-medium inline-block min-w-[55px] z-[1]">
        PASSWORD
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[7px] max-w-full mt-[-4.9px] text-base text-gray-200">
        <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[214px] max-w-full">
          <div
            className="self-stretch relative leading-[28.2px] z-[1]"
            style={accessibilityStatementComponStyle}
          >
            **********
          </div>
        </div>
        <img
          className="h-4 w-4 relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={exIconeye}
        />
      </div>
    </div>
  );
};

export default InputnameCopy;
