import React from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const navListMenuItems = [
  { title: "Saddle Stitched Booklets", path: "/saddle-stitched-booklets" },
  { title: "Brochures", path: "/brochures" },
  {title:"Business Cards", path:"/business-cards"},
  {title:"Compliment Slips", path:"/compliment-slips"},
  {title:"Copying", path:"/copying"},
  {title:"Dissertations", path:"/dissertations"},
  {title:"Greeting Cards", path:"/greeting-cards"},
  {title:"Invitations", path:"/invitations"},
  {title:"Invoice Books" ,path:"/invoice-books"},
  {title:"Leaflets & Flyers", path:"/leaflets-flyers"},
  {title:"Labels", path:"/labels"},
  {title:"Letterheads" , path:"/letterheads"},
  {title:"Postcards", path:"/postcards"},
  {title:"Posters", path:"/posters"},
  {title:"Presentation Folders", path:"/presentation-folders"},
  {title:"Roller Banners", path:"/roller-banners"},
  {title:"Showcards",path:"/showcards"},
  {title:"Swing Tags", path:"/swing-tags"},
  {title:"Wedding Stationery" , path:"/wedding-stationery"},
  {title:"Wire Bound Documents", path:"/wire-bound-documents"},
];
import headerimg from "../../assets/headerimg.png";
import "./Header.css";
import { Link } from "react-router-dom";
// import MegaMenuProduct from "../allproduct/megamenuproduct";
const Header = () => {
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
    <>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-8xl items-center justify-between pr-12 h-20 pt-3 pb-3 box-border"
        >
          <div className="flex lg:flex-1 ml-5 pl-5">
            <a href="#">
              <img
                alt=""
                src={headerimg}
                className="ml-0 mr-0"
                style={{ width: "100px", height: "78px" }}
              />
            </a>
          </div>

          <div className="hidden lg:flex gap-10 mr-16">
            <Link
              to={"/"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor "
            >
              Home
            </Link>

            <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
              className="hover:bg-transparent"
            >
              <MenuHandler className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor">
                <Typography as="div" variant="small" className="font-medium">
                  <ListItem
                    className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-transparent"
                    selected={isMenuOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    <Link to="/allproduct"> All Product</Link>

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

            <Link
              to={"/wedding"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor "
            >
              weddings
            </Link>
            <Link
              to={"/directmail"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              dirct mail
            </Link>
            <Link
              to={"/startup"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              start-up business
            </Link>
            <Link
              to={"/digitalpublication"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              digital publications
            </Link>
            <Link
              to={"/design"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor "
            >
              design
            </Link>
            <Link
              to={"/website"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              websites
            </Link>
            <Link
              to={"/about"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase  fontcolor"
            >
              about
            </Link>
            <Link
              to={"/contact"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase  fontcolor"
            >
              contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
