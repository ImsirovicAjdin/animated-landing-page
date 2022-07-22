import { LeftSide } from "./LeftSide"


function NavBar() {
  return (
    <nav className="absolute top-0 px-2 py-3 z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg">
        <div
        className="container flex flex-wrap mx-auto px-4 items-center justify-between"
      >
        <LeftSide />
      </div>
    </nav>
  )
}

export {NavBar}