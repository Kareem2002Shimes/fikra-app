import Link from "next/link";
import Image from "next/image";
interface NavbarProps {
  links?: string[];
  socialLinks?: any;
}
function Navbar({ links, socialLinks }: NavbarProps) {
  return (
    <nav>
      <ul
        className={`flex items-center flex-wrap  ${
          socialLinks ? "gap-[26px]" : "gap-[48px]"
        }`}
      >
        {links &&
          links.map((link: string) => (
            <li key={link}>
              <Link
                href={`/${link}`}
                className="capitalize text-neutral-50 hover:text-accent-color transition-all duration-200 ease-in"
              >
                {link}
              </Link>
            </li>
          ))}
        {socialLinks &&
          socialLinks.map((link: any) => (
            <li key={link.url}>
              <Link href={`/${link.url}`} className=" ">
                <Image
                  src={`/images/social-icons/${link.icon}.svg`}
                  alt="social-img"
                  width={link.url === "facebook" ? 18 : 25}
                  height={link.url === "facebook" ? 18 : 25}
                />
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Navbar;
