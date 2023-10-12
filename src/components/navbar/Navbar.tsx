"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { BsFolder } from "react-icons/bs";
import Link from "next/link";
import profileImage from "./profile.jpg";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { BsCreditCard2Back } from "react-icons/bs";

const StyledNavbar = styled.div`
  display: flex;
z-index: 100;

  justify-content: space-between;
  align-items: center;
  padding: 22px 31px;
`;

const StyledMenu = styled.div`
  padding: 6px;
  border: 0.1px solid gray;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  gap: 7px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: center;
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink>
        <Link href="/">
          <StyledLogo>
            <Logo />
            <span>samwell.ai</span>
          </StyledLogo>
        </Link>

        <StyledLink href="">Home</StyledLink>

        <StyledLink href="">Price</StyledLink>
        <StyledLink href="">Influencer Program</StyledLink>
      </NavLink>

      <StyledMenu>
        <FiMenu size={20} />
      </StyledMenu>
      <Profile />
    </StyledNavbar>
  );
};

const ButtonProfile = styled.div`
  align-items: center;
  color: gray;
  gap: 5px;
  font-size: 15px;
  cursor: pointer;
  padding: 4px 15px;
  border: 1px solid #cac9c9;
  border-radius: 60px;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileDiv = styled.div`
  position: absolute;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 50px;
background-color: white;

  right: 0;
  min-width: 250px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 8px 10px 20px #c7c1c1;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Add a value for gap */
`;

const StyledProfile = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const StyleLine = styled.div`
  width: full;
  height: 1px;
  background-color: #dad2d2;
`;

const StyledSpan = styled.span`
  color: #3f3d3d;
`;
// Rest of the code...
const StyledPro = styled.div`
  background-color: #287eff;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-transform: uppercase;

  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FlexColumn = styled.span`
  display: flex;
  flex-direction: column;
`;
const SpanLarge = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const SpanSmall = styled.span`
  font-size: 14px;
  color: #646464;
`;

const Profile = () => {
  const [openProfile, setProfile] = useState(false);

  const handleProfile = () => setProfile(!openProfile);

  return (
    <StyledProfile>
      <ButtonProfile onClick={handleProfile}>
        <span>@profile</span>
        <StyledImage
          src={profileImage}
          alt="Profile"
          width={100}
          height={100}
        />
      </ButtonProfile>
      {openProfile && (
        <ProfileDiv>
          <FlexDiv>
            <StyledPro>Ay</StyledPro>
            <FlexColumn>
              <SpanLarge>Akash Yadav</SpanLarge>
              <SpanSmall>akashuixud@gmail.com</SpanSmall>
            </FlexColumn>
          </FlexDiv>
          <FlexDiv>
            <BsFolder size={23} color={"gray"} />
            <StyledSpan>My Activities</StyledSpan>
          </FlexDiv>

          <FlexDiv>
            <LuSettings size={23} color={"gray"} />
            <StyledSpan>Rewards and Referral</StyledSpan>
          </FlexDiv>
          <StyleLine></StyleLine>
          <FlexDiv>
            <LuSettings size={23} color={"gray"} />

            <StyledSpan>Accounts Settings</StyledSpan>
          </FlexDiv>

          <FlexDiv>
            <BsCreditCard2Back size={23} color={"gray"} />
            <StyledSpan>Billing</StyledSpan>
          </FlexDiv>

          <FlexDiv>
            <FiLogOut size={23} color={"gray"} />
            <StyledSpan>Logout</StyledSpan>
          </FlexDiv>
        </ProfileDiv>
      )}
    </StyledProfile>
  );
};

export default Navbar;
