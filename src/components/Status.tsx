// import Twemoji from 'react-twemoji';

function Status({
  color,
  title
  }: {
    color: string,
    title: string
  }) {

  return (
    <>
      <div className={"rounded-full " + color}>
        {title}
      </div>
    </>
  )
}

export default Status