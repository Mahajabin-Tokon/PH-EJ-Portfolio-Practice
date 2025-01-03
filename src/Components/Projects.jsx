import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="p-10 my-10 space-y-5">
      <h2 className="text-6xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Project 1</h2>
            <div className="card-actions">
              <button className="btn bg-slate-800 text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Project 1</h2>
            <div className="card-actions">
              <button className="btn bg-slate-800 text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Project 1</h2>
            <div className="card-actions">
              <button className="btn bg-slate-800 text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
