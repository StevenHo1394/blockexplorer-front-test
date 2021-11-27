import chadLogo from "../../public/logo.svg";
import Image from 'next/image'
import { aboutLinks, productsLinks, resourceLinks, socLinks } from "../../config/footer"
import { ChapterItem, FooterNav, FooterWrapper, ListItem, Logo, NavLinks, NavList, SocLinks, SocList } from "./styled";

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterNav>
                <SocLinks>
                    <Logo>
                        <a href="/">
                            <div className="wrapper">
                                <Image src={chadLogo} alt="Chadscan logo" />
                            </div>
                        </a>
                    </Logo>
                    <SocList>
                        {socLinks.map(link => <ListItem key={`${link}_socLinks_${Math.random(0, 1)}`}>{link.icon}</ListItem>)}
                    </SocList>
                </SocLinks>
                <NavLinks>
                    <NavList>
                        {productsLinks.map((link, i) => link === productsLinks[0] ? <ChapterItem key={`${link}_productsLinks_${Math.random(0, 1)}_${i}`}>{link}</ChapterItem> : <ListItem key={`${link}_productsLinks_${Math.random(0, 1)}_${i}`}><a href="">{link}</a></ListItem>)}
                    </NavList>
                    <NavList>
                        {resourceLinks.map(link => link === resourceLinks[0] ? <ChapterItem key={`${link}_resourceLinks${Math.random(0, 1)}`}>{link}</ChapterItem> : <ListItem key={`${link}_resourceLinks_${Math.random(0, 1)}`}><a href="">{link}</a></ListItem>)}
                    </NavList>
                    <NavList>
                        {aboutLinks.map(link => link === aboutLinks[0] ? <ChapterItem key={`${link}_aboutLinks_${Math.random(0, 1)}`}>{link}</ChapterItem> : <ListItem className={`${link === aboutLinks[1] ? 'child' : ''}`} key={`${link}_aboutLinks_${Math.random(0, 1)}`}><a href="">{link}</a></ListItem>)}
                    </NavList>
                </NavLinks>
            </FooterNav>
        </FooterWrapper>
    )
}