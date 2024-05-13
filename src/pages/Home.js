import MainHeader from "../components/MainHeader";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-full relative bg-gray-100 flex flex-col items-start justify-start overflow-hidden">
        <div className="self-stretch h-[7400.3px] relative bg-gray-100 hidden" />
        <MainHeader />
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="/about-us.png"
                    loading="lazy"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  Why reading is important ?
                </h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  Reading plays a significant role in a child's education by
                  prepping them after school life. It is key for acquiring good
                  study habits and builds the foundation for communication &
                  connection. Studies suggest that students who have read more
                  books and read on a regular basis have better school results.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[58px] pb-[111.3px] box-border max-w-full text-left text-23xl text-gray-800 font-mulish lg:pl-[29px] lg:pr-[29px] lg:box-border mq750:pb-[72px] mq750:box-border">
          <div className="flex flex-col items-start justify-start gap-[60px] max-w-full lg:gap-[30px_60px]">
            <div className="flex flex-col items-start justify-start gap-[69px] max-w-full lg:gap-[34px_69px] mq750:gap-[17px_69px]">
              <div className="w-[1092px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[870px] relative leading-[52px] font-semibold flex items-center shrink-0 max-w-full z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                  Why choosing Fiction Express Reading Live
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-[75px] max-w-full text-center text-xl text-darkslateblue lg:flex-wrap lg:gap-[75px_37px] mq750:gap-[75px_19px]">
                <div className="w-[346px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq450:flex-wrap">
                  <img
                    className="h-[81.5px] w-20 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon1png2x-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[173px]">
                    <div className="self-stretch relative leading-[26px] font-medium z-[2] mq450:text-base mq450:leading-[21px]">
                      <p className="m-0">GUIDED READING NOTES &</p>
                      <p className="m-0">GLOSSARY</p>
                    </div>
                  </div>
                </div>
                <div className="h-[81.5px] w-[315px] flex flex-row items-end justify-start py-0 pr-[30px] pl-0 box-border">
                  <img
                    className="h-[81.5px] w-20 relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon3png@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.5px]">
                    <div className="self-stretch relative leading-[26px] font-medium z-[2] mq450:text-base mq450:leading-[21px]">
                      <p className="m-0">COMPREHENSION</p>
                      <p className="m-0">QUESTIONS</p>
                    </div>
                  </div>
                </div>
                <div className="h-[88px] w-[315px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                    <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px]">
                      <img
                        className="w-20 h-[81.5px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/icon2png@2x.png"
                      />
                    </div>
                    <div className="flex-1 relative leading-[26px] font-medium z-[2] mq450:text-base mq450:leading-[21px]">
                      <p className="m-0">VOCABULARY AND</p>
                      <p className="m-0">GRAMMAR BUILDER</p>
                      <p className="m-0">WORKSHEET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1091px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-darkslateblue">
              <div className="w-[771px] flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                <div className="w-[292px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[9.5px] box-border min-w-[138px]">
                      <div className="self-stretch relative leading-[26px] font-medium z-[1] mq450:text-base mq450:leading-[21px]">
                        <p className="m-0">OPEN DISCUSSION</p>
                        <p className="m-0">ACTIVITIES</p>
                      </div>
                    </div>
                    <img
                      className="h-[81.5px] w-20 relative object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/icon4png@2x.png"
                    />
                  </div>
                </div>
                <div className="h-[81.5px] w-[341px] relative max-w-full">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[261px] max-h-full w-20 object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon5png@2x.png"
                  />
                  <div className="absolute top-[20px] left-[0px] leading-[26px] font-medium flex items-center w-[273px] h-[52px] z-[2] mq450:text-base mq450:leading-[21px]">
                    <span className="w-full">
                      <p className="m-0">ACCESS TO 100+ FICTION</p>
                      <p className="m-0">EXPRESS BOOKS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section class="bg-blue-500">
          <div class="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
            <div>
              <h2 class="text-3xl font-medium text-white">
                Why choose <br />
                Fiction Express
                <br />
                Reading Live ?
              </h2>
            </div>

            <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
              <div class="absolute -top-8 left-8 bg-blue-500 px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-16 w-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p class="mb-3 font-medium uppercase text-white">
                GUIDED READING NOTES & GLOSSARY
              </p>
              <p class="text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                vero ullam placeat molestiae aspernatur quasi, facere, aliquam
                ea quia maiores ipsum soluta cumque voluptates.
              </p>
            </div>
            <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
              <div class="absolute -top-8 left-8 bg-blue-500 px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-16 w-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p class="mb-3 font-medium uppercase text-white">
                COMPREHENSION QUESTIONS
              </p>
              <p class="text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                vero ullam placeat molestiae aspernatur quasi, facere, aliquam
                ea quia maiores ipsum soluta cumque voluptates.
              </p>
            </div>
            <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
              <div class="absolute -top-8 left-8 bg-blue-500 px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-16 w-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p class="mb-3 font-medium uppercase text-white">
                VOCABULARY AND GRAMMAR BUILDER WORKSHEET
              </p>
              <p class="text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                vero ullam placeat molestiae aspernatur quasi, facere, aliquam
                ea quia maiores ipsum soluta cumque voluptates.
              </p>
            </div>
            <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
              <div class="absolute -top-8 left-8 bg-blue-500 px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-16 w-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p class="mb-3 font-medium uppercase text-white">
                OPEN DISCUSSION ACTIVITIES
              </p>
              <p class="text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                vero ullam placeat molestiae aspernatur quasi, facere, aliquam
                ea quia maiores ipsum soluta cumque voluptates.
              </p>
            </div>
            <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
              <div class="absolute -top-8 left-8 bg-blue-500 px-4 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-16 w-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p class="mb-3 font-medium uppercase text-white">
                ACCESS TO 100+ FICTION EXPRESS BOOKS
              </p>
              <p class="text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                vero ullam placeat molestiae aspernatur quasi, facere, aliquam
                ea quia maiores ipsum soluta cumque voluptates.
              </p>
            </div>
          </div>
        </section>

        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[235.8px] pr-5 pl-[23px] box-border max-w-full text-left text-23xl text-gray-800 font-mulish mq750:pb-[153px] mq750:box-border">
          <div className="w-[1107px] flex flex-col items-start justify-start gap-[29px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[513px] relative leading-[52px] font-semibold flex items-center shrink-0 max-w-full z-[1] mq1050:text-15xl mq1050:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
                Our 6 Step Methodology
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/6steppng2x-1@2x.png"
            />
          </div>
        </section>

        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8 ">
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
              <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  LEVEL 1 | Grade 1-3
                </h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus accusamus esse cum, praesentium laudantium enim
                  pariatur magnam accusantium illum animi? Quos quisquam at
                  laborum eius?
                </p>
              </div>
              <div>
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
              <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  LEVEL 2 | Grade 4-6
                </h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus accusamus esse cum, praesentium laudantium enim
                  pariatur magnam accusantium illum animi? Quos quisquam at
                  laborum eius?
                </p>
              </div>
              <div>
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div class="grid gap-8 md:grid-cols-2 lg:gap-12 ">
              <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
                <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  LEVEL 3 | Grade 7-9
                </h1>

                <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus accusamus esse cum, praesentium laudantium enim
                  pariatur magnam accusantium illum animi? Quos quisquam at
                  laborum eius?
                </p>
              </div>
              <div>
                <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="w-screen py-20">
          <h3 class="mb-12 text-center font-sans text-3xl font-bold">
            A sneak peak into some fiction express Titles
          </h3>
          <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 1
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Pandoras Box - Savior Pirotta
                </h1>
              </div>
            </article>

            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-1@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 1
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Maximus Gladiator - David Macphail
                </h1>
              </div>
            </article>

            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-2@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 1
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Micro - Andrew G Tailor
                </h1>
              </div>
            </article>
          </div>
          <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-3@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 2
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Pandoras Box - Savior Pirotta
                </h1>
              </div>
            </article>

            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-4@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 2
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Maximus Gladiator - David Macphail
                </h1>
              </div>
            </article>

            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-5@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 2
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Micro - Andrew G Tailor
                </h1>
              </div>
            </article>
          </div>
          <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-6@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 3
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Pandoras Box - Savior Pirotta
                </h1>
              </div>
            </article>

            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-7@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 3
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Maximus Gladiator - David Macphail
                </h1>
              </div>
            </article>

            <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
              <img
                class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-80 lg:h-96"
                src="/level1coverpng2x-2-8@2x.png"
                alt="blog"
              />
              <h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Level 3
              </h2>
              <div class="py-1 px-6">
                <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                  Micro - Andrew G Tailor
                </h1>
              </div>
            </article>
          </div>
        </section>
      </div>
      <section class="relative bg-violet-200 py-10 text-black sm:py-16 lg:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Start Using Reading Club by Enrolling Today
            </h2>

            <div class="sm mt-5 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:px-0 lg:mt-6">
              <Link
                to="/studentsignup"
                class="mt-4 rounded-md border-2 border-violet-700 bg-violet-700 px-8 py-3 font-medium text-lg text-white transition hover:translate-y-1"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
