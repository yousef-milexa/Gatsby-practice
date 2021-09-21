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

    ${minBreakpointQuery.large`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    `};
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

    ${minBreakpointQuery.large`
        display: flex;
        justify-content: flex-end;
    `};
`;

const StyledLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    
    ${minBreakpointQuery.large`
        display: flex;
        justify-content: space-between;
    `};

    ${maxBreakpointQuery.large`
        justify-content: space-evenly;
        align-content: center;
        flex-wrap: wrap;
    `};

    ${maxBreakpointQuery.tiny`
        grid-template-columns: 1fr;
    `};
`;

const StyledLink = styled.div`
    ${maxBreakpointQuery.tiny`
        display: grid;
        grid-template-columns: 1fr 1fr;
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

const PolicyList = styled.div`
    max-width: 400px;
    margin-top: 31px;

    ul {
        display: flex;
        flex-wrap: wrap;
        ${minBreakpointQuery.large`
            display: flex;
            justify-content: space-between;
        `};
    };

    li {
        list-style: none;
    };

    a {
        white-space: nowrap;
        text-decoration: underline;
        gap: 20px;
        color: ${standardColours.white};
    };
`;

const BusinessInfo = styled.p`
    margin: -16px 0 47px 0;

    p {
        color: ${standardColours.white};
    };
`;

const Footer = () => {
    const {
        datoCmsSite: { siteName },
        datoCmsFooter: { boxinfo, boxtitle, companyinfo },
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
            }
        }
        `);

    return (
        <StyledFooter>
            <Container>
                <StyledInner>
                    <StyledTop>
                        <div className="brand-logo">
                            <img className="hovia-logo" src={HoviaWhite} alt="hovia"/>
                        </div>
                        <StyledSocial>
                            <img className="insta" src={Insta} alt="Instagram"/>
                            <img className="pint" src={Pint} alt="Pinterest"/>
                        </StyledSocial>
                    </StyledTop>
                    <StyledLine />
                    <StyledLinks>
                        {/* Column1 */}
                        <StyledColumn1>
                            <img src={TrustPilot} alt="trustpilot"/>
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
                        <StyledLink>
                            {/* Column2 */}
                            <StyledColumn2>
                                <h3 className="footer-titles">Company info</h3>
                                <ul className="list">
                                    <List><a href="contactus">Contact us</a></List>
                                    <List><a href="about">About</a></List>
                                    <List><a href="blog">Blog</a></List>
                                </ul>
                            </StyledColumn2>
                            {/* Column3 */}
                            <StyledColumn3>
                                <h3 className="footer-titles">Product info</h3>
                                <ul className="list">
                                    <List><a href="Howitworks">How it works</a></List>
                                    <List><a href="Measurement&Installation">Measurement & Installation</a></List>
                                    <List><a href="Papertypes">Paper types</a></List>
                                    <List><a href="Delivery&returns">Delivery & returns</a></List>
                                    <List><a href="faq">Frequently asked questions</a></List>
                                    <List><a href="Ordersamples">Order samples</a></List>
                                </ul>
                            </StyledColumn3>
                        </StyledLink>
                        {/* Column4 */}
                        <StyledColumn4>
                            <div className="shop-worldwide">
                                <h3 className="footer-titles">Shop worldwide</h3>
                                <div className="flag-box">
                                    <img src={flag0} alt="flag0"/>
                                    <img src={flag1} alt="flag1"/>
                                    <img src={flag2} alt="flag2"/>
                                    <img src={flag3} alt="flag3"/>
                                    <img src={flag4} alt="flag4"/>
                                    <img src={flag5} alt="flag5"/>
                                    <img src={flag6} alt="flag6"/>
                                    <img src={flag7} alt="flag7"/>
                                    <img src={flag8} alt="flag8"/>
                                    <img src={flag9} alt="flag9"/>
                                </div>
                            </div>
                            <div className="secure-shopping">
                                <h3 className="footer-titles">Secure shopping</h3>
                                    <div className="norton-space">
                                        <img className="norton" src={secure1} alt="secure1"/>
                                    </div>
                                <div className="security-box">
                                    <img src={secure2} alt="secure2"/>
                                    <img src={secure3} alt="secure3"/>
                                    <img src={secure4} alt="secure4"/>
                                    <img src={secure5} alt="secure5"/>
                                    <img src={secure6} alt="secure6"/>
                                    <img src={secure7} alt="secure7"/>
                                    <img src={secure8} alt="secure8"/>
                                    <img src={secure9} alt="secure9"/>
                                </div>
                            </div>
                        </StyledColumn4>
                    </StyledLinks>

                    <PolicyList>
                        <ul className="list-1">
                            <li><a href="Terms&Conditions">Terms & Conditions</a></li>
                            <li><a href="Privacypolicy">Privacy policy</a></li>
                            <li><a href="Returnspolicy">Returns policy</a></li>
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