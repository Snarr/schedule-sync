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
      <div key="calendar-event" className="w-full h-fit px-6 py-4 bg-white flex flex-row gap-3 items-center border-b-2 select-none">
        {/* <Twemoji options={{ className: 'twemoji' }}>
          {icon}
        </Twemoji> */}
        {/* <div>
          {icon}
        </div> */}
        <div key="details" className="flex flex-col items-start">
          <div key="times" className="flex flex-col justify-start items-start gap-2">
            <div key="name" className="font-bold text-xl">
              {name}
            </div>
            <div key="time-range" className="font-normal">
              <Status color={busy ? "bg-red-100" : "bg-green-100"} title={busy ? "Busy" : "Available"} />
            </div>
          </div>
          {/* <div key="days" className="text-gray-600 font-normal text-xs">
            {days}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default EventCard