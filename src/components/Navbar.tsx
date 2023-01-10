import { useSession } from "next-auth/react";
import Link from "next/link";
import AddEvent from "./AddEvent";
import Button from "./Button";

const pages = [
  "Schedule",
  "Friends",
  "Account"
]

function Navbar() {
  const { data: sessionData } = useSession();

  if (!sessionData) return (<></>)
  
  return (<div className="w-full px-2 py-1 flex flex-row justify-center items-center gap-2 absolute bottom-0 border-t-2 bg-white ">
            <AddEvent onClick={undefined}/>
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} className="w-full">
                <Button>{page}</Button>
              </Link>
            ))}
          </div>)
}

export default Navbar;