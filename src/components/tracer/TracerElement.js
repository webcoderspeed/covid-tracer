import styled from 'styled-components'

export const APP = styled.div`
  display: grid;
  overflow: hidden;
  background: #101522;

  @media(max-width:768px){
    display:block;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  grid-column: 1/-1;

  @media(max-width:768px){
    flex-direction:column;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 25px;
  font-family: serif;
  color: #fff;
  margin-top: 30px;
  text-decoration:none;
  
`

export const HighLight = styled.span`
  color: red;
  font-family: serif;
`

export const AppStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px;
  grid-column: 1/-1;
  text-align: center;

  @media(max-width:768px){
    display:block;
    margin-bottom:15px;
  }
`

export const CaseType = styled.h1`
  color: #00c8ffc2;
  text-align: center;
`

export const Day = styled.div`
  padding: 25px 15px;
  background: #101522;
  border: 0;
  outline: 0;
  color: #fff;
  font-weight: bold;
  position: relative;

  &::after{
  position: absolute;
  top: 15px;
  left: 25px;
  content:'Days';
  color: #fff;
  font-size: 2rem;
  }
`
export const Value = styled.span`
  position: absolute;
  right: 25px;
  top: 15px;
  font-size: 2rem;
  color: #fff;
`
export const Meter = styled.input`
  height: 38px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  background: #101522;
`

export const Card = styled.div`
  background: #101522;
`
