import styled from "styled-components";

export const Card = styled.div`
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: 30px;
    width: 412px;
    height: 416px;

    @media (max-width: 568px) {
        width: 327px;
        height: 400px;
  }

    img{
        display: block;
        margin: auto;
        padding-top: 45px;
    }

    .thank{
        font-size: 15px;
        font-weight: 400px;
        text-align: center;
        padding: 4px 0px 4px 0px;
        width: 193px;
        margin: 32px auto;
        color: #FC7614;
        background: #262E38;
        border-radius: 22.5px;
    }

    h1{
        margin: auto;
        width: 143px;
        height: 43px;
        color: white;
        font-size: 28px;

        @media (max-width: 568px) {
        font-size: 24px;
        text-align: center;
  }
    }

    .text {
        width: 340px;
        margin: 7px auto;
        text-align: center;
        font-size: 15px;
        color: #969FAD;

        @media (max-width: 568px) {
        width: 279px;
  }
    }
`