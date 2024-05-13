import { useState } from "react";
import { Button } from "@mui/material";
import InputnameCopy from "./InputnameCopy";

const DayTrialButton = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  return (
    <div className="w-[509px] bg-white shadow-[0px_82px_40px_-14px_rgba(100,_100,_100,_0.08)] box-border flex flex-col items-end justify-start pt-[37.5px] pb-[38px] pr-[62px] pl-[63px] gap-[104px] max-w-full z-[1] text-center text-12xl-3 text-gray-300 font-zen-kaku-gothic-antique border-[1px] border-solid border-gainsboro mq450:gap-[26px_104px] mq725:gap-[52px_104px] mq725:pt-6 mq725:px-[31px] mq725:pb-[25px] mq725:box-border">
      <div className="w-[509px] h-[668px] relative bg-white shadow-[0px_82px_40px_-14px_rgba(100,_100,_100,_0.08)] box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[48.8px] max-w-full mq450:gap-[24px_48.8px]">
        <div className="w-[366.4px] flex flex-row items-start justify-start py-0 pr-3.5 pl-[14.3px] box-border max-w-full">
          <b className="flex-1 relative tracking-[-0.5px] leading-[39.7px] shrink-0 [debug_commit:f6aba90] z-[2] mq450:text-lgi mq450:leading-[22px] mq975:text-6xl mq975:leading-[30px]">
            Student Registration
          </b>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start shrink-0 [debug_commit:f6aba90] text-left text-2xs-3 text-dimgray">
          <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[11.9px] px-[16.8px] pb-[6.3px] max-w-full z-[2] border-[1px] border-solid border-gainsboro">
            <div className="w-[381px] h-[69px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
            <div className="relative leading-[19px] font-medium inline-block min-w-[55px] z-[1]">
              FULL NAME
            </div>
            <input
              className="w-[330.2px] [border:none] [outline:none] bg-[transparent] h-[30.8px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border font-zen-kaku-gothic-antique text-base text-gray-200 max-w-full"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
            <div className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-[12.4px] px-[16.8px] pb-[6.6px] max-w-full z-[2] border-[1px] border-solid border-gainsboro">
              <div className="w-[381px] h-[72px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
              <div className="relative leading-[19.8px] font-medium inline-block min-w-[78px] z-[1]">
                EMAIL ADRRESS
              </div>
              <input
                className="w-[330.2px] [border:none] [outline:none] bg-[transparent] h-[32.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border font-zen-kaku-gothic-antique text-base text-gray-200 max-w-full"
                placeholder="johndoe@example.com"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
            <InputnameCopy
              exIconeye="/exiconeye1@2x.png"
              propDisplay="inline-block"
            />
            <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[11.9px] px-[16.8px] pb-[6.3px] max-w-full z-[3] mt-[-1px] border-[1px] border-solid border-gainsboro">
              <div className="w-[381px] h-[69px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
              <div className="relative leading-[19px] font-medium inline-block min-w-[78px] z-[1]">
                EMAIL ADRRESS
              </div>
              <input
                className="w-[330.2px] [border:none] [outline:none] bg-[transparent] h-[30.8px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border font-zen-kaku-gothic-antique text-base text-gray-200 max-w-full"
                placeholder="johndoe@example.com"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[38px] text-left text-2xs-2 text-dimgray mq450:gap-[19px_38px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <input
            className="accent-gray-0 m-0 h-[22px] w-[21.5px] relative box-border z-[2] border-[1px] border-solid border-gray-300"
            checked={checkboxChecked}
            type="checkbox"
            onChange={(event) => setCheckboxChecked(event.target.checked)}
          />
          <div className="relative [text-decoration:underline] leading-[23px] z-[2]">
            I agree to the Terms of Service and Privacy Policy.
          </div>
        </div>
        <Button
          className="self-stretch h-16 z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#212121",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#212121" },
            height: 64,
          }}
        >
          CREATE AN ACCOUNT
        </Button>
      </div>
    </div>
  );
};

export default DayTrialButton;
