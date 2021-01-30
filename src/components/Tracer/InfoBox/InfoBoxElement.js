import styled from 'styled-components'

export const Card = styled.div`
    height: 150px;
    flex: 1;
    width: 100%;

    &:nth-child(1),&:nth-child(2),&:nth-child(3){
        background: #004e92;
    }

    &:not(:last-child){
    margin-right: 15px;
    }

    @media(max-width:768px){
        &:nth-child(1),&:nth-child(2),&:nth-child(3){
            margin-bottom:15px;
    }
}
`

export const Cases = styled.h1`
    color: #00ffea;
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 0.2rem;
`

export const Title = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
`

export const Total = styled.h2`
    color: #fff;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 5px;
`