import React from "react";
import Taskdetail from "./Taskdetail";
import VitalButton from "./VitalButton";

const Submitdetail = () => {
  return (
    <>
      <div className=" w-[450px] h-[837px] rounded-[16px] border border-[#A1A3AB] border-opacity-[0.63] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] m-5">
        <Taskdetail
          image="/Dog.png"
          title="Walk the dog"
          policy="Extreme"
          status="Not Started"
        />
        <div className="text-[var(--neutral-gray)] m-4">
          <p className="my-5">
            Take the dog to the park and bring treats as well.
          </p>
          <p className="my-4">
            Take Luffy and Jiro for a leisurely stroll around the neighborhood.
            Enjoy the fresh air and give them the exercise and mental
            stimulation they need for a happy and healthy day. Don't forget to
            bring along squeaky and fluffy for some extra fun along the way!
          </p>
        </div>
        <div className="text-[var(--neutral-gray)] my-4">
          <ol className="m-4 list-decimal pl-6 list-inside my-2 ">
            <li>Listen to a podcast or audiobook</li>
            <li>Practice mindfulness or meditation</li>
            <li>Take photos of interesting sights along the way</li>
            <li>Practice obedience training with your dog</li>
            <li>Chat with neighbors or other dog walkers</li>
            <li>Listen to music or an upbeat playlist</li>
          </ol>
        </div>
        <div className="mt-60 mr-4">
          <VitalButton />
        </div>
      </div>
    </>
  );
};

export default Submitdetail;
