// import Twemoji from 'react-twemoji';

import Status from "./Status"

function EventCard({
  name,
  busy
  }: {
    name: string,
    busy: boolean
  }) {

  return (
    <>
      <div key="calendar-event" className="w-full h-fit px-6 py-4 bg-white flex flex-col gap-2 justify-center items-start border-b-2 select-none">
        <div key="name" className="font-bold text-2xl">
          {name}
        </div>
        <Status color={busy ? "bg-red-100" : "bg-green-500"} title={busy ? "Busy" : "Available"} />
      </div>
    </>
  )
}

export default EventCard