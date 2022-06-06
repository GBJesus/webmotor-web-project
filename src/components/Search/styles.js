import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 450px;
`;

export const Header = styled.div`

  img {
    margin: 24px 0 66px 8px;
    height: 45px;
  }
`;

export const Options = styled.div`
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  width: 933px;
  height: 60px;
  @media (max-width: 943px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    display: flex;
    display: grid;
    grid-template-rows: 1fr 1fr;
    position: relative;
    justify-items: center;
  }
  button {
    position: absolute;
    right: 0px;
    border: 2px solid #ff9000;
    background: #f8f8ff;
    padding: 8px 32px;
    border-radius: 4px;
    font-weight: 600;
    height: 70%;
    @media (max-width: 650px) {
      width: 100%;
      bottom: 0;
      right: auto;
      align-content: center;
      height: 50%;
      min-width: 440px;
    }
    a {
      text-decoration: none;
      font-size: 16px;
      color: #ff9000;
      font-family: 600;
      height: auto;
    }
  }
`;

export const BuyOption = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 60px;
  align-content: center;

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

`;

export const BuyCar = styled.div`
  border-bottom: 4px solid #f3123c;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #686976;
    font-size: 16px;
    max-width: 175px;
    @media (max-width: 650px) {
      max-width: 100%;
    }
  }
`;

export const ImageCar = styled.div`
  height: 56px;
  padding-top: 30px;
  margin-bottom: 10px;

  img {
      margin: 0 16px;
      width: 40px;
      height: 20px;
    }
`;

export const TextBuyCar = styled.div`
p {
      margin: 0 10px;
    }
    h2 {
      color: #f3123c;
      font-size: 30px;
      margin: -6px 10px 10px;
      font-weight: 400;
      height: auto;
    }`;

export const BuyMotorcycle = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #686976;
    font-size: 16px;
    max-width: 175px;
    @media (max-width: 650px) {
      max-width: 100%;
    }
  }
`;

export const ImageMotorcycle = styled.div`
  height: 56px;
  padding-top: 26px;
  margin-bottom: 10px;

  img {
      margin: 0 16px;
      width: 40px;
      height: 20px;
    }
`;

export const TextBuyMotorcycle = styled.div`
p {
      margin: 0 10px;
    }
    h2 {
      font-size: 30px;
      margin: -6px 10px 10px;
      font-weight: 400;
      height: auto;
    }`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  width: 933px;
  height: 312px;
  margin: 0 auto;
  padding: 16px 50px;
  background: #fff;
  @media (max-width: 943px) {
    width: 90%;
    height: 60%;
  }
  /* @media (max-width: 930px) {
    min-width: 440px;
  } */
  /* @media (max-width: 550px) {
  } */
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  @media (max-width: 930px) {
    padding: 0 8px;
  }
  input {
    width: 30px;
    height: 30px;

    @media (max-width: 550px) {
      width: 14px;
      height: 14px;
    }
  }
  p {
    margin-right: 40px;
    margin-left: -2px;
    font-size: 16px;
    @media (max-width: 650px) {
      font-size: 12px;
      margin-right: 20px;
    }
    @media (max-width: 550px) {
      margin-left: 8px;
    }
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
  }
`;

export const BoxLeft = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  margin-right: 8px;

  @media (max-width: 930px) {
    width: 90%;
    margin: 0;
  }

  @media (max-width: 550px) {
  }
`;

export const LocalInput = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  position: relative;
  right: 0;
  input {
    height: 38px;
    font-size: 16px;
    padding: 0 8px;
    border: 1px solid hsl(0,0%,80%);
    border-radius: 4px 0 0 4px;
    & + input {
      padding: 0 8px;
      border-radius: 0 4px 4px 0;
      margin-left: -1px;
    }
  }
`;

export const YearPriceInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  input {
    height: 100%;
    font-size: 16px;
    padding: 0 8px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
`;

export const AdvancedSearch = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 13px;
    height: 13px;
  }

  a {
    text-decoration: none;
    color: #f3123c;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const BoxRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  margin-left: 8px;

  @media (max-width: 930px) {
    width: 90%;
    margin: 0;
  }
`;

export const ModelCarInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 920px) {
    grid-row: 2;
  }
  input {
    max-width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 0 8px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    /* @media (max-width: 943px) {
      width: 90%;
    } */
  }
`;

export const VersionInput = styled.div`
  input {
    font-size: 16px;
    padding: 0 8px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    @media (max-width: 930px) {
      margin-top: 16px;
    }
  }
`;

export const BoxSend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 930px) {
    width: 90%;
    margin: 0;
    padding: 0 8px;
  }
`;

export const Send = styled.div`
  display: grid;
  grid-template-columns: 27% 68%;
  gap: 20px;
  align-items: center;
  a {
    font-size: 16px;
    text-decoration: none;
    color: #686976;
  }
  button {
    font-size: 20px;
    height: 60px;
    border-radius: 4px;
    color: #fff;
    background: #f3123c;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -1px;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export const SelectStyle = styled(Select)`
  color: black;
  cursor: pointer !important;
  width: 100%;
  height: 100%;

  span {
    opacity: 0;
  }
`;

export const Cars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 933px;
  margin: 16px auto;
  @media (max-width: 943px) {
    width: 90%;
    height: 60%;
  }
`;

export const Car = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  background: #fff;
  border-radius: 4px;
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.3);
  height: 430px;
`;

export const CarImage = styled.div`
  img {
    width: 100%;
    height: 186px;
    @media (max-width: 943px) {
    width: 90%;
    height: 60%;
  }
  }
`;

export const CarModel = styled.div`
  padding: 8px;
`;

export const CarMakeModel = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 8px;
    color: #333;
    font-weight: 600;
  }
  h2 {
    font-size: 14px;
    text-transform: uppercase;
    color: #333;
    font-weight: 600;
  }
`;

export const CarVersion = styled.div`
  p {
    margin-top: 8px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    color: #808080;
  }
`;

export const CarPriceYearKm = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 8px;
`;

export const CarPrice = styled.div`
  align-items: center;
  font-size: 22px;
`;

export const CarYearKm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
`;

export const CarYear = styled.div`
  display: flex;
  font-size: 12px;
`;

export const CarKm = styled.div`
  font-size: 12px;
  p {
    padding-left: 85px;
    right: 0;
  }
`;

