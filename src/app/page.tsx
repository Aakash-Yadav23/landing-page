"use client";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GiStarFormation } from 'react-icons/gi';
import BlurryBgSVG from '../bbblurrybg.svg';
import Image from 'next/image';

const StyledBody = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  overflow: hidden;
 
`;

const StyleTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 105px;
  max-width: 85%;
  text-align: center;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
  font-size: 1.5rem;
   
  }
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 70%;
  text-align: center;
  margin-bottom: 40px;
`;

const StyledBox = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  min-height: 350px;
  
  
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  text-align: center;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StyledSelect = styled.select`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RowFlexBoxMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

}
`;

const ColumnFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SelectValue = styled.option`
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const BlurryBg = styled(Image)`
  width: 100%;
  height: 100%;
  /* backdrop-filter: blur(10px); */
`;

const Absolute=styled.div`
  position: absolute;
  width: 100%;
  bottom: 50;
  background-size: cover;
  /* height: 100%; */
  /* overflow-x: hidden; */
  z-index: -1;
  @media (max-width: 768px) {
    bottom: 0;

   
  }

`

const StyledButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 25px;
  background: linear-gradient(to right, #8b24c7, #ab83a1);
  color: white;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
`;

const StyledSpanSmall = styled.span`
  font-size: 2rem;
  text-align: center;
  @media (max-width: 768px) {
  font-size: 1rem;
   
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Home() {
  const placeholderType = [
    'Write an Essay About Your Country',
    'The Impact of Growing Population',
    'Impact on the World Due to Russia Ukraine War',
  ];
  const [currentPlaceHolder, setCurrentPlaceHolder] = useState(
    placeholderType[0]
  );

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % placeholderType.length;
      setCurrentPlaceHolder(placeholderType[index]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledBody>
      <StyledText>
        <StyleTitle>Instantly Write Your Next Paper with Samwell.ai</StyleTitle>
        <StyledP>Your Easy, Pleasant, and Productive AI Helper</StyledP>
      </StyledText>
      <StyledBox>
        <StyledSpanSmall>
          I need an essay about:
        </StyledSpanSmall>
        <StyledInput type="text" placeholder={currentPlaceHolder} />
        <RowFlexBoxMain>
          <ColumnFlexBox>
            <RowFlexBox>
              <input type="checkbox" />
              <span>Add Instructions</span>
            </RowFlexBox>
            <RowFlexBox>
              <input type="checkbox" />
              <span>In-text Citations</span>
            </RowFlexBox>
          </ColumnFlexBox>
          <FlexContainer>
            <span>with</span>
            <StyledSelect>
              <SelectValue value="500">500</SelectValue>
              <SelectValue value="1000">1000</SelectValue>
              <SelectValue value="1500">1500</SelectValue>
              <SelectValue value="2000">2000</SelectValue>
            </StyledSelect>
            <span>words</span>
          </FlexContainer>
        </RowFlexBoxMain>
        <StyledButton>
          <GiStarFormation />
          Write My Essay
        </StyledButton>
      </StyledBox>
      <Absolute>

      <BlurryBg src={BlurryBgSVG} height={100} width={100}/>
      </Absolute>
     
   
    </StyledBody>
  );
}
