import type { MouseEventHandler } from "react";

function Button({
  children,
  onClick
  }: {
    children: string,
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  }) {

  return (
    <>
      <div key="calendar-event" className="w-full h-fit px-6 py-4 bg-white rounded-full flex flex-row justify-center items-center cursor-pointer select-none" onClick={onClick}>
        {children}
      </div>
    </>
  )
}

export default Button