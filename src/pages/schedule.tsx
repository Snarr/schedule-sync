import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";
import EventCard from "../components/EventCard";
import { useState } from "react";

const EventCreator = (
  icon: string,
  eventName: string,
  timeRange: string,
  days: string
) => {
  return {icon, eventName, timeRange, days}
}

const Schedule: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [events, setEvents] = useState([
    EventCreator("📲", "CIS 4515", "9:30 am - 10:50 am", "Monday, Tuesday, Wednesday"),
    EventCreator("📚", "IH 0852", "11:00 am - 12:20 am", "Tuesday, Thursday"),
    EventCreator("⚡", "PHYS 1061", "9:20 am - 10:30 am", "Tuesday, Thursday"),
    EventCreator("📊", "CIS 2033", "12:00 pm - 12:50 pm", "Monday, Wednesday, Friday"),
    EventCreator("🎉", "CIS 3603", "5:30 pm - 8:00 pm", "Monday"),
    EventCreator("🛠️", "Work", "6:30 pm - 9:50 pm", "Tuesday, Thursday, Friday"),
    EventCreator("🛠️", "Work", "6:30 pm - 9:50 pm", "Tuesday, Thursday, Friday"),
    EventCreator("🛠️", "Work", "6:30 pm - 9:50 pm", "Tuesday, Thursday, Friday"),
    EventCreator("🛠️", "Work", "6:30 pm - 9:50 pm", "Tuesday, Thursday, Friday"),
    EventCreator("🛠️", "Work", "6:30 pm - 9:50 pm", "Tuesday, Thursday, Friday"),
    EventCreator("🛠️", "Work", "6:30 pm - 9:50 pm", "Tuesday, Thursday, Friday"),
  ]);

  return (
    <>
      <Head>
        <title>Schedule Sync</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full w-full flex-col items-center justify-start bg-white gap-2 overflow-hidden">
        <div className="flex h-full w-full flex-col items-center justify-start relative overflow-scroll">
          {events.map((event) => {
            return <EventCard key={event.eventName} {...event}></EventCard>
          })}
        </div>
        {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Schedule;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
