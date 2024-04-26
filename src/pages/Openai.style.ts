import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'GmarketSansTTFMedium';
  justify-content: space-around;
`;

const Header = styled.div`
  font-size: 15px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  background-color: #fffffeb3;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 31px;
`;

const TitleInput = styled.input`
  border: none;
  padding-left: 17px;
  border-radius: 10px;
  height: 100%;
  width: 200px;
  box-shadow:
    inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
`;

const CountInput = styled.input`
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 25px;
  width: 25px;
`;

const Btn = styled.button`
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 180px;
  background-color: #fffffeb3;
  border-radius: 25px;
`;

const PlayButton = styled.button`
  border: 0;
  background-color: transparent;
`;

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  animation: ${rotate} 1.2s linear infinite;

  & span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  }

  & span:nth-child(1) {
    filter: blur(5px);
  }

  & span:nth-child(2) {
    filter: blur(10px);
  }

  & span:nth-child(3) {
    filter: blur(25px);
  }

  & span:nth-child(4) {
    filter: blur(50px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #f1f1f1;
    border: solid white 10px;
    border-radius: 50%;
  }
`;

const playImg = styled.img`
  cursor: pointer;
  border-radius: 50%;
  box-shadow:
    -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
`;

const gae = styled.div`
  background: white;
  height: 25px;
  width: 25px;
  border-top-right-radius: 10px;
  vertical-align: center;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
`;

export {
  Wrapper,
  TitleInput,
  Btn,
  Header,
  Body,
  CountInput,
  Input,
  PlayButton,
  Loading,
  playImg,
  gae,
};