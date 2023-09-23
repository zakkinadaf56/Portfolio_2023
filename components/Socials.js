import Link from "next/link";

//ICONS
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";


const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'/'} className="hover:text-accent translate-all duration-300"><RiInstagramLine/></Link>
    <Link href={'/'} className="hover:text-accent translate-all duration-300"><RiFacebookLine/></Link>
    <Link href={'/'} className="hover:text-accent translate-all duration-300"><RiLinkedinLine/></Link>
    <Link href={'/'} className="hover:text-accent translate-all duration-300"><RiGithubLine/></Link>
  </div>
  );
};

export default Socials;
