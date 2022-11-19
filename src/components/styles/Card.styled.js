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

    img {
        padding: 16px;
        border-radius: 100%;
        background-color: #262E38;
        margin-top: 32px;
        margin-left: 32px;

        
    }

    h1 {
        color: white;
        margin-left: 32px;
        margin-top: 30px;
        font-size: 28px;

        @media (max-width: 568px) {
        font-size: 24px;
        }
    }

    p {
        margin-left: 32px;
        margin-top: 7px;
        color: #969FAD;
        font-size: 15px;
        width: 340px;
        height: 72px;
        line-height: 24px;

        @media (max-width: 568px) {
        width: 279px;
        font-size: 14px;
        }
    }

    

    div {
        margin-left: 32px;
        margin: 24px auto;
        display: flex;
        width: 371px;
        height: 60px;

        @media (max-width: 568px) {
        width: 285px
        }
        
        align-items: center;
        button {
            background-color: #262E38;
            color: #7C8798;
            width: 51px;
            height: 51px;
            border-radius: 100%;
            border: none;
            cursor: pointer;

            @media (max-width: 568px) {
                width: 41px;
                height: 41px;
            }
        }
    }

    button {
        width: 341px;
        height: 45px;
        display: block;
        margin: 32px auto;
        font-size: 15px;
        color: white;
        font-weight: 700;
        background-color: #FC7614;
        border-radius: 22.5px;
        cursor: pointer;
        border: none;
        width: 341px; 

        @media (max-width: 568px) {
        margin-top: 24px;
        width: 279px;
        }
    }

    .submit:hover {
        background-color: white;
        color: #FC7614;
    }

    .isNotActive {
        background-color: #262E38;
    }

    .isNotActive:hover {
        background-color: #7C8798;
        color: white;   
    }

    .isActive {
        background-color: #FC7614;
        color: white;
    }
`