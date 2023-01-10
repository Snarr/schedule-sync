import Button from "./Button";

function Navbar() {
  return (<div className="w-full px-2 py-1 flex flex-row justify-center items-center gap-2">
            <Button>
              Events
            </Button>
            <Button>
              Friends
            </Button>
            <Button>
              Account
            </Button>
          </div>)
}

export default Navbar;