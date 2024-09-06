import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  { title: "Business Cards", path: "/business-cards" },
  { title: "Brochures", path: "/brochures" },
  { title: "Banners", path: "/banners" },
  { title: "Display Boards", path: "/display-boards" },
  { title: "Folded Leaflets", path: "/folded-leaflets" },
  { title: "Leaflets & Flyers", path: "/leaflets-flyers" },
  { title: "Presentation Folders", path: "/presentation-folders" },
  { title: "Perfect Bound Documents", path: "/perfect-bound-documents" },
  { title: "Posters (Large Format)", path: "/posters-large-format" },
  { title: "Posters (Digital & Litho)", path: "/posters" },
  { title: "Roller Banners", path: "/roller-banners" },
  {
    title: "Roller Labels & Sticker Sheet Labels & Stickers",
    path: "/roller-labels-stickers",
  },
  { title: "Stationery", path: "/stationery" },
  { title: "Single Labels & Stickers", path: "/single-labels-stickers" },
  { title: "Saddle Stitched Booklets", path: "/saddle-stitched-booklets" },
  { title: "Window Stickers", path: "/window-stickers" },
  { title: "Wire Bound Documents", path: "/wire-bound-documents" },
];
import headerimg from "../../assets/1.png";
import "./Header.css";
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, path }, key) => (
    <Link to={path} key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-transparent">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase ">
            Home
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/wedding"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          weddings
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/directmail"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          dirct mail
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/startup"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          start-up business
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/digitalpublication"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          digital publications
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/design"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          design
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/website"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          websites          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/about"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
          about          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/contact"}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase">
            Contact Us
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function MegaMenuDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (

      <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <Link to={"/"}>
              {/* <img src={headerimg} /> */}
              material
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
     
    
  );
}
