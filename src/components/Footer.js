import React from 'react';
import { Container, Svg } from "./ui"
import styled from "styled-components";
import { 
    brandColours,
    standardColours,
    minBreakpointQuery, 
    maxBreakpointQuery,
    fontSize,
} from '../styles';
import Logo from "./ui/Logo";
import instagramIcon from "../images/assets/instagram.inline.svg";
import pinterestIcon from "../images/assets/pinterest.inline.svg";
import hoviaWhite from "../images/assets/hoviawhite.svg";
import trustPilot from "../images/assets/trustpilot.svg";
import gb from "../images/png/gb.png";
import it from "../images/png/it.png";
import nz from "../images/png/nz.png";
import ie from "../images/png/ir.png";
import de from "../images/png/de.png";
import aus from "../images/png/au.png";
import us from "../images/png/us.png";
import ca from "../images/png/ca.png";
import es from "../images/png/es.png";
import fr from "../images/png/fr.png";
import norton from "../images/png/norton.png";
import visa from "../images/png/visa.png";
import americanExpress from "../images/png/ae.png";
import masterCard from "../images/png/mastercard.png";
import payPal from "../images/png/paypal.png";
import discover from "../images/png/discover.png";
import jcb from "../images/png/jcb.png";
import maestro from "../images/png/maestro.png";
import unionPay from "../images/png/unionpay.png";
import { useStaticQuery, graphql } from 'gatsby';

const StyledFooter = styled.footer`
    background-color: ${brandColours.neutral[500]};
    color: ${standardColours.white};
`;

const StyledInner = styled.div`
    max-width: 1240px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    padding-top: 3em;
`;

const StyledTop = styled.div`
    display: block;
    margin: auto;

    ${minBreakpointQuery.tiny`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: unset;
    `};
`;

const StyledBrand = styled.div`
`;

const StyledLine = styled.hr`
    margin: 30px auto 0;
    height: 1px;
    border: none;
    opacity: 30%;
    width: 100%;
    background-color: ${standardColours.white};
`;

const StyledSocial = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
    white-space: nowrap;

    ${minBreakpointQuery.tiny`
        display: flex;
        justify-content: flex-end;
        margin-top: 0;
    `};
`;

const StyledSocialLink = styled.a`
`;

const StyledLinks = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;

    ul {
        padding-left: 0;
    }

    ${maxBreakpointQuery.large`
        align-content: center;
        flex-wrap: wrap;
    `};

    ${maxBreakpointQuery.tiny`
        gap: 10px;
    `};
`;

const StyledLink = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px;
    ${maxBreakpointQuery.large`
        width: 100%
    `};

    ${maxBreakpointQuery.tsmall`
        gap: 10px;
    `};
`;

const StyledColumn1 = styled.div`
    a {
        color: ${brandColours.neutral[500]};
        text-decoration: none;
    };

    ${maxBreakpointQuery.large`
        order: 3;
    `};
`;

const StyledColumn2 = styled.div`
    ${maxBreakpointQuery.large`
        order: 1;
    `};
`;

const StyledColumn3 = styled.div`
    ${maxBreakpointQuery.large`
        order: 2;
    `};
`;

const StyledColumn4 = styled.div`
    width: 230px;
    margin-right: 40px;
    ${maxBreakpointQuery.large`
        order: 4;
    `};
`;

const StyledComBox = styled.div`
    height: 208px;
    width: 296px;
    color: ${standardColours.white};
    background: #242424;
    margin-top: 24px;
    padding: 16px;
`;

const StyledComBoxTitle = styled.h3`
    margin-top: 0;
    text-align: left;
    vertical-align: top;
    ${fontSize(10)};
`;

const StyledComBoxInfo = styled.p`
    flex-wrap: wrap;
    text-align: left;
    vertical-align: top;
    ${fontSize(8.75)};
`;

const StyledBtnDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledComBoxButton = styled.button`
    height: 56px;
    width: 264px;
    border-radius: 4px;
    cursor: pointer;
    ${fontSize(10)};
`;

const StyledList = styled.li`
    list-style: none;
    padding-bottom: 8px;
    cursor: pointer;
    margin-bottom: 16px;
    text-underline-offset: 4px;
    ${fontSize(8.75)};

    a {
        color: ${standardColours.white};
    };
`;

const StyledLinksTitle = styled.h3`
    ${fontSize(10)};
`;
const StyledShopWorldWide = styled.div`
`;

const StyledGuaranteeIcons = styled.div`
    display: table;
    width: 100%;
`;

const ShopWorldwideTitle = styled.h3`
    ${fontSize(10)};
`;
const StyledSecureShop = styled.div`
`;
const SecurityBoxTitle = styled.h3`
    ${fontSize(10)};
`;
const StyledNorton = styled.div`
`;

const StyledPolicyList = styled.div`
    max-width: 400px;
    margin-top: 31px;

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        justify-content: space-between;
    };
`;

const StyledBusinessInfo = styled.p`
    margin: -16px 0 47px 0;
    line-height: 16px;
    ${fontSize(7.5)};
    color: ${standardColours.white};
`;

// images
const StyledLogo = styled(Svg)`
`;

const StyledIcon = styled(Svg)`
    height: 32px;
    width: 32px;
    cursor: pointer;
`;

const StyledTrustImg = styled(Svg)`
    margin-top: 31px;
`;

const StyledTinyImg = styled.img`
    margin-right: 8px;
`;

const StyledNortonImg = styled.img`
`;
//

const Footer = () => {
    const {
        datoCmsSite: {
            globalSeo: { siteName },
        },
        datoCmsFooter: { boxInfo, boxTitle, companyInfo, flagsTitle, securityTitle, hoviaLight },
        datoCmsSitewide: { instagramProfile, pinterestProfile },
    } = useStaticQuery(graphql`
        query FooterQuery {
            datoCmsSite {
                globalSeo {
                    siteName
                    }
                }
            datoCmsFooter {
                boxInfo
                boxTitle
                companyInfo
                flagsTitle
                securityTitle
                hoviaLight {
                    alt
                    url
                }
                }
            datoCmsSitewide {
                instagramProfile
                pinterestProfile
                }
            }
        `);

    return (
        <StyledFooter>
            <Container>
                <StyledInner>
                    <StyledTop>
                        <StyledBrand>
                            {/* <StyledLogo image={hoviaWhite} title={`hovia`}/> */}
                            <Logo alt={true}/>
                        </StyledBrand>
                        {(instagramProfile || pinterestProfile) && (
                            <StyledSocial>
                                {instagramProfile && (
                                    <StyledSocialLink
                                        href={instagramProfile}
                                        target={`_blank`}
                                        rel={`noopener noreferrer`}
                                    >
                                        <StyledIcon image={instagramIcon} title={`Instagram`}/>
                                    </StyledSocialLink>
                                )}
                                {pinterestProfile && (
                                    <StyledSocialLink
                                        href={pinterestProfile}
                                        target={`_blank`}
                                        rel={`noopener noreferrer`}
                                    >
                                        <StyledIcon image={pinterestIcon} title={`Pinterest`}/>
                                    </StyledSocialLink>
                                )}
                            </StyledSocial>
                        )}
                    </StyledTop>
                    <StyledLine />
                    <StyledLinks>
                        {/* Column1 */}
                        <StyledColumn1>
                            <StyledTrustImg image={trustPilot} title={`trustpilot`}/>
                            <StyledComBox>
                                <StyledComBoxTitle>
                                    {boxTitle}
                                </StyledComBoxTitle>
                                <StyledComBoxInfo>
                                    {boxInfo}
                                </StyledComBoxInfo>
                                <StyledBtnDiv>
                                    <StyledComBoxButton><a href="learnmore">Learn more</a></StyledComBoxButton>
                                </StyledBtnDiv>
                            </StyledComBox>
                        </StyledColumn1>
                            {/* Column2 */}
                            <StyledLink>
                                <StyledColumn2>
                                    <StyledLinksTitle>Company info</StyledLinksTitle>
                                    <ul className="list">
                                        <StyledList><a href="contactus">Contact us</a></StyledList>
                                        <StyledList><a href="about">About</a></StyledList>
                                        <StyledList><a href="blog">Blog</a></StyledList>
                                    </ul>
                                </StyledColumn2>
                                {/* Column3 */}
                                <StyledColumn3>
                                    <StyledLinksTitle>Product info</StyledLinksTitle>
                                    <ul className="list">
                                        <StyledList><a href="Howitworks">How it works</a></StyledList>
                                        <StyledList><a href="Measurement&Installation">Measurement & Installation</a></StyledList>
                                        <StyledList><a href="Papertypes">Paper types</a></StyledList>
                                        <StyledList><a href="Delivery&returns">Delivery & returns</a></StyledList>
                                        <StyledList><a href="faq">Frequently asked questions</a></StyledList>
                                        <StyledList><a href="Ordersamples">Order samples</a></StyledList>
                                    </ul>
                                </StyledColumn3>
                            </StyledLink>
                        {/* Column4 */}
                        <StyledColumn4>
                            <StyledShopWorldWide>
                                <ShopWorldwideTitle>{flagsTitle}</ShopWorldwideTitle>
                                <StyledGuaranteeIcons>
                                    <StyledTinyImg src={gb} alt='Great Britain flag'/>
                                    <StyledTinyImg src={it} alt='Italy flag'/>
                                    <StyledTinyImg src={nz} alt='New Zealand flag'/>
                                    <StyledTinyImg src={ie} alt='Ireland flag'/>
                                    <StyledTinyImg src={de} alt='Germany flag'/>
                                    <StyledTinyImg src={aus} alt='Australia flag'/>
                                    <StyledTinyImg src={us} alt='USA flag'/>
                                    <StyledTinyImg src={ca} alt='Canada flag'/>
                                    <StyledTinyImg src={es} alt='Spain flag'/>
                                    <StyledTinyImg src={fr} alt='France flag'/>
                                </StyledGuaranteeIcons>
                            </StyledShopWorldWide>
                            <StyledSecureShop>
                                <SecurityBoxTitle>{securityTitle}</SecurityBoxTitle>
                                    <StyledNorton>
                                        <StyledNortonImg src={norton} alt='norton'/>
                                    </StyledNorton>
                                <StyledGuaranteeIcons>
                                    <StyledTinyImg src={visa} alt='secure2'/>
                                    <StyledTinyImg src={americanExpress} alt='secure3'/>
                                    <StyledTinyImg src={masterCard} alt='secure4'/>
                                    <StyledTinyImg src={payPal} alt='secure5'/>
                                    <StyledTinyImg src={discover} alt='secure6'/>
                                    <StyledTinyImg src={jcb} alt='secure7'/>
                                    <StyledTinyImg src={maestro} alt='secure8'/>
                                    <StyledTinyImg src={unionPay} alt='secure9'/>
                                </StyledGuaranteeIcons>
                            </StyledSecureShop>
                        </StyledColumn4>
                    </StyledLinks>
                    <StyledPolicyList>
                        <ul className="list-1">
                            <StyledList><a href="Terms&Conditions">Terms & Conditions</a></StyledList>
                            <StyledList><a href="Privacypolicy">Privacy policy</a></StyledList>
                            <StyledList><a href="Returnspolicy">Returns policy</a></StyledList>
                        </ul>
                    </StyledPolicyList>

                    <StyledBusinessInfo>
                        &copy; {siteName} {new Date().getFullYear()}. {companyInfo}
                    </StyledBusinessInfo>
                </StyledInner>
            </Container>
        </StyledFooter>
    );
}

export default Footer;