import Link from "next/link";
import Button from "./Button";

const pages = [
  "Schedule",
  "Friends",
  "Account"
]

function Navbar() {
  return (<div className="w-full px-2 py-1 flex flex-row justify-center items-center gap-2">
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} className="w-full">
                <Button>{page}</Button>
              </Link>
            ))}
          </div>)
}

export default Navbar;