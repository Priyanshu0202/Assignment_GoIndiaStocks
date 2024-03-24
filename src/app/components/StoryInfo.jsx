import React from "react";

const StoryCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md my-4">
      <img
        className="w-full h-40 object-cover object-center"
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Card Image"
      />
      <div className="p-3">
        <h2 className="text-lg text-left font-semibold mb-2">
          Ths Coldest Sunset
        </h2>
        <p className="text-gray-700 text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ab, aut
          aliquam dolore, adipisci ullam ex nemo architecto debitis dolor
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
