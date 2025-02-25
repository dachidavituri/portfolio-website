import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        className="hover:text-accent transition-all duration-300"
        href={"https://www.linkedin.com/in/dachi-davituri-9692a8252/"}
      >
        <FaLinkedin />
      </Link>
      <Link
        className="hover:text-accent transition-all duration-300"
        href={"https://github.com/dachidavituri"}
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default Socials;
