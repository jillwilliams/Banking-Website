import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us</FooterLinkTitle>
                            <FooterLink to="signin">
                                How it Works</FooterLink>
                            <FooterLink to="signin">
                                Testimonials</FooterLink>
                            <FooterLink to="signin">
                                Investors</FooterLink>
                            <FooterLink to="signin">
                                Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us</FooterLinkTitle>
                            <FooterLink to="/">
                                Contact</FooterLink>
                            <FooterLink to="/">
                                Support</FooterLink>
                            <FooterLink to="/">
                                Locations</FooterLink>
                            <FooterLink to="/">
                                Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos</FooterLinkTitle>
                            <FooterLink to="/">
                                Submit Videos</FooterLink>
                            <FooterLink to="/">
                                Ambassadors</FooterLink>
                            <FooterLink to="/">
                                Agency</FooterLink>
                            <FooterLink to="/">
                                Influencers</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Social Media</FooterLinkTitle>
                            <FooterLink to="/">
                                Instagram</FooterLink>
                            <FooterLink to="/">
                                Facebook</FooterLink>
                            <FooterLink to="/">
                                YouTube</FooterLink>
                            <FooterLink to="/">
                                Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla ⚖️
                        </SocialLogo>
                        <WebsiteRights>
                            dolla © {new Date().getFullYear()}
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank"                         aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com"   target="_blank"                         aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com"   target="_blank"                         aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com"   target="_blank"                         aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;

