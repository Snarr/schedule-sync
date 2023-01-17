// import Twemoji from 'react-twemoji';

function Status({
  color,
  title
  }: {
    color: string,
    title: string
  }) {

  return (
    <div className="flex flex-row justify-start items-center gap-2 text-sm">
      <div className={"w-4 h-4 rounded-full " + color}/>
      <div>
        {title}
      </div>
    </div>
  )
}

export default Status