import { MdClose } from "react-icons/md"
import { NavItem } from "./Hero"
import { Link as ScrollLink } from "react-scroll"

interface DrawerProps {
  changeIsMenuOpen: () => void
  navItems: NavItem[]
}

export function Drawer({ changeIsMenuOpen, navItems }: DrawerProps) {
  return (
    <div id="drawer" aria-labelledby="drawer-label">
      <div className="drawer-header">
        <h5 id="drawer-label">
          Menu
        </h5>
        <MdClose onClick={changeIsMenuOpen} />
      </div>

      <div className="drawer-content">
        {navItems.map((navItem) => (
          <ScrollLink to={navItem.to} smooth>{navItem.name}</ScrollLink>
        ))}
      </div>
    </div>
  )
}