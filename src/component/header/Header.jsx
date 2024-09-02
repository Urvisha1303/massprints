import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  // XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

import headerimg from "../../assets/headerimg.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-8xl items-center justify-between pr-12 h-20 pt-3 pb-3 box-border"
        >
          <div className="flex lg:flex-1 ml-5 pl-5">
            <a href="#" >
              <img
                alt=""
                src={headerimg}
                className="ml-0 mr-0"
                style={{ width: "100px", height: "78px" }}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex gap-10 mr-16">
            <Link to={"/"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor "
            >
              Home
            </Link>
            <Popover className="relative ">
              <PopoverButton className="flex items-center gap-x-1 text-sm uppercase leading-6 fontcolor ">
                all products
                {/* <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400 fontcolor" /> */}
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-400"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a
              href="#"
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor "
            >
              weddings
            </a>
            <Link to={"/directmail"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              dirct mail
            </Link>
            <Link to={"/startup"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              start-up business
            </Link>
            <Link to={"/digitalpublication"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              digital publications
            </Link>
            <Link to={"/design"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor "
            >
              design
            </Link>
            <Link to={"/website"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase fontcolor"
            >
              websites
            </Link>
            <Link to={"/about"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase  fontcolor"
            >
              about
            </Link>
            <Link to={"/contact"}
              className="flex items-center gap-x-1 text-sm leading-6 uppercase  fontcolor"
            >
              contact
            </Link>
             
          </PopoverGroup>
        </nav>
      </header>
    </>
  );
};

export default Header;
