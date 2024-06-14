import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import instance from "../Instance";
import Cookies from "js-cookie";
import { Backdrop, CircularProgress } from "@mui/material";

const Teacherlevel = () => {
  const [allLevel, setAllLevel] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllLevel = async () => {
    setLoading(true);
    const res = await instance({
      url: `level/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    setAllLevel(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getAllLevel();
  }, []);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header highlight={"tchrpnl"} />
      <BreadCrumb crumbData={[{ name: "Level ", path: null }]} />

      <section class="py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="relative mb-10 pt-1 md:mb-16">
            <h2 class="mb-4 text-center font-serif !text-2xl font-bold text-violet-900 md:mb-6 md:text-4xl">
              Please Select the Level
            </h2>
          </div>
          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            {allLevel.map(function (ele) {
              return (
                <article class="relative select-none bg-violet-50 px-8 pt-10 pb-20 text-violet-900 shadow-md">
                  <h1 class="text-sm uppercase">{ele.level}</h1>
                  <h1 class="text-lg font-semibold">{ele.classes}</h1>
                  <Link
                    to={`/teacherbatch/${ele._id}`}
                    class="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-violet-500 text-white transition-all hover:w-16"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teacherlevel;
