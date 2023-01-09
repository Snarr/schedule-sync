import Twemoji from 'react-twemoji';

function EventCard({
  icon,
  eventName,
  timeRange,
  days}: {
    icon: string,
    eventName: string,
    timeRange: string,
    days: string
  }) {

  return (
    <>
      <div key="calendar-event" className="w-full h-fit px-6 py-4 rounded-full bg-white flex flex-row gap-3 items-center shadow-3xl">
        <Twemoji options={{ className: 'twemoji' }}>
          {icon}
        </Twemoji>
        <div key="details" className="flex flex-col items-start">
          <div key="times" className="flex flex-row justify-start items-center gap-2">
            <div key="name" className="font-bold text-xl">
              {eventName}
            </div>
            <div key="time-range" className="font-normal">
              {timeRange}
            </div>
          </div>
          <div key="days" className="text-gray-600 font-normal text-xs">
            {days}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard