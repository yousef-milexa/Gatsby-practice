import React from 'react';
import { Container } from "./ui/Container"
import styled from "styled-components";
import { 
    brandColours,
    standardColours,
    minBreakpointQuery, 
    maxBreakpointQuery,
} from '../styles';
import { flag0, flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9,
    secure1, secure2, secure3, secure4, secure5, secure6, secure7, secure8, secure9, 
    HoviaWhite, Insta, Pint, TrustPilot } from "../images/assets/images";
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
    margin-top: 32px;
    white-space: nowrap;

    ${minBreakpointQuery.tiny`
        display: flex;
        justify-content: flex-end;
        margin-top: 0;
    `};
`;

const StyledLinks = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ul {
        padding-left: 0;
    }

    ${maxBreakpointQuery.large`
        align-content: center;
        flex-wrap: wrap;
    `};

    ${maxBreakpointQuery.tiny`
        grid-template-columns: 1fr;
    `};
`;

const StyledColumn1 = styled.div`
    img {
        margin-top: 31px;
    };

    p { 
        margin-top: 8px;
    };

    a {
        color: ${brandColours.neutral[500]};
        text-decoration: none;
    };

    button {
        height: 56px;
        width: 264px;
        border-radius: 4px;
        margin-top: 16px;
        cursor: pointer;
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
    ${maxBreakpointQuery.large`
        order: 4;
    `};
`;

const ComBox = styled.div`
    height: 208px;
    width: 296px;
    color: ${standardColours.white};
    background: #242424;
    margin-top: 24px;
    padding: 16px 16px 16px 16px;
`;

const ComBoxTitle = styled.h3`

`;

const ComBoxInfo = styled.p`

`;

const List = styled.li`
    list-style: none;
    padding-bottom: 8px;
    cursor: pointer;

    a {
        color: ${standardColours.white};
    };
`;

const StyledLinksTitle = styled.h3`
`;

const StyledShopww = styled.div`
`;

const StyledShopwwBox = styled.div`
`;

const ShopWorldwideTitle = styled.h3`
`;

const StyledSecureShop = styled.div`
`;

const StyledSecureBox = styled.div`
`;

const SecurityBoxTitle = styled.h3`
`;

const StyledNorton = styled.div`
`;

const PolicyList = styled.div`
    max-width: 400px;
    margin-top: 31px;

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        justify-content: space-between;
    };
`;

const BusinessInfo = styled.p`
    margin: -16px 0 47px 0;

    p {
        color: ${standardColours.white};
    };
`;

// images
const StyledLogo = styled.img`
`;

const StyledSocialInst = styled.img`
`;

const StyledSocialPint = styled.img`
`;

const StyledTrustImg = styled.img`
`;

const StyledFlagsImg = styled.img`
`;

const StyledSecureImg = styled.img`
`;

const StyledNortonImg = styled.img`
`;

//


const Footer = () => {
    const {
        datoCmsSite: { siteName },
        datoCmsFooter: { boxinfo, boxtitle, companyinfo, flagstitle, securitytitle, hovialight },
    } = useStaticQuery(graphql`
        query FooterQuery {
            datoCmsSite {
                globalSeo {
                    siteName
                }
            }
            datoCmsFooter {
                boxinfo
                boxtitle
                companyinfo
                flagstitle
                securitytitle
                hovialight {
                    url
                    alt
                    }
            }
        }
        `);

    return (
        <StyledFooter>
            <Container>
                <StyledInner>
                    <StyledTop>
                        <StyledBrand>
                            <StyledLogo src={HoviaWhite} alt="hovia"/>
                        </StyledBrand>
                        <StyledSocial>
                            <StyledSocialInst src={Insta} alt="Instagram"/>
                            <StyledSocialPint src={Pint} alt="Pinterest"/>
                        </StyledSocial>
                    </StyledTop>
                    <StyledLine />
                    <StyledLinks>
                        {/* Column1 */}
                        <StyledColumn1>
                            <StyledTrustImg src={TrustPilot} alt="trustpilot"/>
                            <ComBox>
                                <ComBoxTitle>
                                    {boxtitle}
                                </ComBoxTitle>
                                <ComBoxInfo>
                                    {boxinfo}
                                </ComBoxInfo>
                                <button className="learn-more-btn"><a href="learnmore">Learn more</a></button>
                            </ComBox>
                        </StyledColumn1>
                            {/* Column2 */}
                            <StyledColumn2>
                                <StyledLinksTitle>Company info</StyledLinksTitle>
                                <ul className="list">
                                    <List><a href="contactus">Contact us</a></List>
                                    <List><a href="about">About</a></List>
                                    <List><a href="blog">Blog</a></List>
                                </ul>
                            </StyledColumn2>
                            {/* Column3 */}
                            <StyledColumn3>
                                <StyledLinksTitle>Product info</StyledLinksTitle>
                                <ul className="list">
                                    <List><a href="Howitworks">How it works</a></List>
                                    <List><a href="Measurement&Installation">Measurement & Installation</a></List>
                                    <List><a href="Papertypes">Paper types</a></List>
                                    <List><a href="Delivery&returns">Delivery & returns</a></List>
                                    <List><a href="faq">Frequently asked questions</a></List>
                                    <List><a href="Ordersamples">Order samples</a></List>
                                </ul>
                            </StyledColumn3>
                        {/* Column4 */}
                        <StyledColumn4>
                            <StyledShopww>
                                <ShopWorldwideTitle>{flagstitle}</ShopWorldwideTitle>
                                <StyledShopwwBox>
                                    <StyledFlagsImg src={flag0} alt="flag0"/>
                                    <StyledFlagsImg src={flag1} alt="flag1"/>
                                    <StyledFlagsImg src={flag2} alt="flag2"/>
                                    <StyledFlagsImg src={flag3} alt="flag3"/>
                                    <StyledFlagsImg src={flag4} alt="flag4"/>
                                    <StyledFlagsImg src={flag5} alt="flag5"/>
                                    <StyledFlagsImg src={flag6} alt="flag6"/>
                                    <StyledFlagsImg src={flag7} alt="flag7"/>
                                    <StyledFlagsImg src={flag8} alt="flag8"/>
                                    <StyledFlagsImg src={flag9} alt="flag9"/>
                                </StyledShopwwBox>
                            </StyledShopww>
                            <StyledSecureShop>
                                <SecurityBoxTitle>{securitytitle}</SecurityBoxTitle>
                                    <StyledNorton>
                                        <StyledNortonImg src={secure1} alt="secure1"/>
                                    </StyledNorton>
                                <StyledSecureBox>
                                    <StyledSecureImg src={secure2} alt="secure2"/>
                                    <StyledSecureImg src={secure3} alt="secure3"/>
                                    <StyledSecureImg src={secure4} alt="secure4"/>
                                    <StyledSecureImg src={secure5} alt="secure5"/>
                                    <StyledSecureImg src={secure6} alt="secure6"/>
                                    <StyledSecureImg src={secure7} alt="secure7"/>
                                    <StyledSecureImg src={secure8} alt="secure8"/>
                                    <StyledSecureImg src={secure9} alt="secure9"/>
                                </StyledSecureBox>
                            </StyledSecureShop>
                        </StyledColumn4>
                    </StyledLinks>

                    <PolicyList>
                        <ul className="list-1">
                            <List><a href="Terms&Conditions">Terms & Conditions</a></List>
                            <List><a href="Privacypolicy">Privacy policy</a></List>
                            <List><a href="Returnspolicy">Returns policy</a></List>
                        </ul>
                    </PolicyList>

                    <BusinessInfo>
                        &copy; {siteName} {new Date().getFullYear()}. {companyinfo}
                    </BusinessInfo>
                </StyledInner>
            </Container>
        </StyledFooter>
    );
}

export default Footer;