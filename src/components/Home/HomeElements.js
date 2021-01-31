import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomePage = styled.div`
    position: relative;
    overflow: hidden;
    height:100vh;
`

export const BackgroundVideo = styled.video`
    z-index:-1;
    position: absolute;
    top:0;
    left:0;
`

export const Intro = styled.div`
    display: flex;
    flex-direction:column;
    margin:10%;
    width:50%;
    gap:50px;

    @media(max-width:1024px){
        width:80%;
        margin:25% 10%;
    }

    @media(max-width:991px){
        width:80%;
        margin:10% 5%;
    }

    @media(max-width:768px){
        width:100%;
    }
    @media(max-width:480px){
        margin:25% auto;
        padding:3%;
        gap:35px;
    }
`

export const Legend = styled.span`
    background: rgba(32, 173, 255, 0.753);
    color: #fff;
    padding:1%;
    font-size:1.2rem;
    border-radius: 15px;
    text-align: center;
    width: 35%;


    @media(max-width:768px){
        width:50%;
    }

    @media(max-width:480px){
        width:70%;
        margin:0 auto; 
        font-size:0.9rem;
    }
`

export const Title = styled.h1`
    margin-top:-20px;
    color: #fff;
    font-size:4rem;
    width:100%;

    @media(max-width:768px){
        font-size:3rem;
    }

    @media(max-width:480px){
        font-size:2rem;
        margin:0 auto;
        text-align:center;
    }
`

export const HighLight = styled.span`
    color: rgb(231, 181, 54);
    width:100%;

    @media(max-width:768px){
        font-size:3rem;
    }

    @media(max-width:480px){
        font-size:2rem;
    }
`

export const Desc = styled.p`
    color: #fff;
    font-size: 1.5rem;
    width:65%;

    @media(max-width:768px){
        width:70%;
    }
    
    @media(max-width:480px){
        width:100%;
        font-size:1.2rem;
        padding:2%;
        text-align:justify;
    }
`

export const Row = styled.div`
    display:flex;

    @media(max-width:480px){
      margin:0 auto;
    }
`

export const Button = styled(Link)`
    background: ${({right}) => right ? 'transparent' :' linear-gradient( #ffa19c, #e65946)'};
    padding: 25px 70px;
    border-radius: 15px;
    margin-right: 15px;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    border: ${({Border}) => Border ? '2px solid orange' : 0};

    @media(max-width:480px){
        font-size:1.2rem;
        padding:10px 25px;
    }
`