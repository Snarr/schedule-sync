import type { MouseEventHandler, ReactNode } from "react";

function Button({
  children,
  onClick
  }: {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  }) {

  return (
    <>
      <div key="calendar-event" className="w-full h-fit px-6 py-4 bg-white flex flex-row justify-center items-center cursor-pointer select-none" onClick={onClick}>
        {children}
      </div>
    </>
  )
}

export default Button