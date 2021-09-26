import Link from "next/link";
import Image from "next/image";
import facebookLogo from "../../../public/images/logos/facebook.svg";
import linkedinLogo from "../../../public/images/logos/linkedin.svg";
import mediumLogo from "../../../public/images/logos/medium.svg";
import rssLogo from "../../../public/images/logos/rss.svg";
import {
  AddressWrapper,
  CompanyWrapper,
  Copyright,
  FooterWrapper,
  GridWrapper,
  Logo,
  NavigationItem,
  SocialItem,
  SocialWrapper,
  Text,
} from "./Footer.styled";
import { Menu } from "../Nav/Nav.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyWrapper>
        <Logo>
          <Text color="blue">Allcorrect</Text>
          <Text>Game outsourcing studio</Text>
        </Logo>
        <Menu>
          <NavigationItem>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/join">
              <a>Join us</a>
            </Link>
          </NavigationItem>
          <NavigationItem color="blue">
            <Link href="/contact">
              <a>Get in touch</a>
            </Link>
          </NavigationItem>
        </Menu>
      </CompanyWrapper>
      <AddressWrapper>
        <p>
          <span>IRELAND:</span> 66 Silken Vale, Maynooth, co. Kildare, Ireland W23 V3P2
        </p>
        <p>
          <span>CANADA:</span> 119 Spadina Ave, Toronto, ON M6E3J3
        </p>
      </AddressWrapper>

      <Copyright>
        <p>
          © Allcorrect Group 2006—2021,
          <Link
            href="https://allcorrectgames.com/legal-information/"
            target="_blank"
            rel="noopener">
            <a>«Legal information»</a>
          </Link>
        </p>
        <p>site@allcorrectgames.com</p>
      </Copyright>
      <SocialWrapper>
        <SocialItem>
          <Image src={facebookLogo} width={18} height={20} />
          <Link
            href="https://www.facebook.com/allcorrectgames?ref=aymt_homepage_panel"
            target="_blank"
            rel="noopener">
            <a>Facebook</a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Image src={linkedinLogo} width={18} height={20} />
          <Link href="https://medium.com/@allcorrect" target="_blank" rel="noopener">
            <a>Medium</a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Image src={mediumLogo} width={18} height={20} />
          <Link
            href="https://www.linkedin.com/company/allcorrectgames/"
            target="_blank"
            rel="noopener">
            <a>Linkedin</a>
          </Link>
        </SocialItem>
        <SocialItem>
          <Image src={rssLogo} width={18} height={20} />
          <Link
            href="http://feeds.feedburner.com/allcorrectgamescominsights"
            target="_blank"
            rel="noopener">
            <a>RSS</a>
          </Link>
        </SocialItem>
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;
