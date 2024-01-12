import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

import {CgMenuRight} from 'react-icons/cg';

type NavMobileProps = {
  setNavMobile:(arg:boolean)=>void;
}

const Header = ({setNavMobile}:NavMobileProps) => {
  return (
    <header
      data-aos="fade-down"
      data-aos-delay="900"
      className="py-[30px] lg:pt-[60px]"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="">
          <img src={Logo} alt="" />
        </a>
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        <div onClick={()=>setNavMobile(true)} className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
