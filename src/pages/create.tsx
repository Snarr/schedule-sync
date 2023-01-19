import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";
import Friend from "../components/Friend";

const Create: NextPage = () => {

  return (
    <>
      <Head>
        <title>Schedule Sync</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full w-full flex-col items-center justify-start bg-white gap-2 overflow-hidden">
        <form className="flex flex-col">
          <label> Name </label>
          <input type="text"></input>

          <label> Emoji </label>
          <input type=""></input> {"add emoji picker later"}

          <label> Date </label>
          <input type="date"></input>
          
          <label> Repeating? </label>
          <input type="checkbox"></input>
        </form>
      </main>
    </>
  );
};

export default Create;