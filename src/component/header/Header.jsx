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
import headerimg from "../../assets/1.png";
import "./Header.css";

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

function NavListMenu({setOpenNav}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const handleItemClick = () => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    setOpenNav(false);
  };
  const renderItems = navListMenuItems.map(({ title, path }, key) => (
    <Link to={path} key={key} onClick={handleItemClick}>
      <MenuItem className="flex items-center gap-3 rounded-lg  dropdownmenuhover bg-transparent-50/50">
        <div>
          <Typography
            variant="h6"
            className="flex items-center text-sm font-bold text-white  border-0  dropdownmenuhover bg-transparent-50/50 "
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
          <Typography
            as="div"
            variant="small"
            className="font-medium hoverblue"
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-white hoverblue bg-transparent-50/50 "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}  
            >
              <Link to="/allproduct"  onClick={() => setOpenNav(false)}>
              All Products
              </Link>
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
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block bg-clr-blue border-0">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0  ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ setOpenNav }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 bg-clr-blue">
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            Home
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      {/* <Typography as="a" variant="small" className="font-medium">
        <Link to={"/wedding"} className="bg-clr-blue" onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            weddings
          </ListItem>
        </Link>
      </Typography> */}
      {/* <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/directmail"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            dirct mail
          </ListItem>
        </Link>
      </Typography> */}
      {/* <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/startup"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            start-up business
          </ListItem>
        </Link>
      </Typography> */}
      {/* <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/digitalpublication"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            digital publications
          </ListItem>
        </Link>
      </Typography> */}
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/design"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            design
          </ListItem>
        </Link>
      </Typography>
      {/* <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/website"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            websites{" "}
          </ListItem>
        </Link>
      </Typography> */}
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/about"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            about{" "}
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to={"/contact"} onClick={() => setOpenNav(false)}>
          <ListItem className="flex items-center gap-2 py-2 pr-4 uppercase text-white hoverblue bg-transparent-50/50">
            Contact Us
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="w-full">
      <Navbar className="max-w-full bg-clr-blue rounded-none border-0 pl-8 pr-14 pr-6 sm:pr-14 md:pr-20">
        <div className=" w-full h-20 py-4 flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <Link to={"/"}>
              <img src={headerimg} className="w-full h-28" />
            </Link>
          </Typography>
          <div className="hidden xl:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="xl:hidden"
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
          <NavList setOpenNav={setOpenNav} />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
