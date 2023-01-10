import type { MouseEventHandler } from "react";

function AddEvent({onClick}: {onClick: MouseEventHandler<HTMLDivElement> | undefined}) {
  return (
    <div className="bg-black text-white w-10 h-10 p-3 flex justify-center items-center rounded-full cursor-pointer absolute -top-12 right-5 select-none" onClick={onClick}>
      +
    </div>
  )
}

export default AddEvent;