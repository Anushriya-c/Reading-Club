import React from "react";

const NotFound = () => {
  return (
    <div>
      <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
        <img
          src="/error.jpg"
          loading="lazy"
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
