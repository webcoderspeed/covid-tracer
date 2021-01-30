import styled from 'styled-components'

export const Data = styled.div`
    font-size: 12px;
    margin-top: 20px;
    overflow-y: scroll;
    height: 450px;
    color: aqua;
    font-size: 1.5rem;
    margin-bottom: 25px;
    background: linear-gradient(to left,#02073d,#004e92, #04093f);
    border-bottom:2px solid #fff;
    border-top:2px solid #3071A9;

 &::-webkit-scrollbar {
    width: 12px;           
  }
 &::-webkit-scrollbar-track {
    background: linear-gradient(to left,#004e92, #080d42, #004e92);
  }
 &::-webkit-scrollbar-thumb {
    background: linear-gradient(#1cf7c0, #58ceba);
}
`
export const TR = styled.tr`
    display: flex;
    justify-content: space-between;
    border-left:2px solid #3071A9;

    &:nth-last-of-type(odd){
    color: #fff;
    border-left:2px solid #fff;
    background: linear-gradient(to right, #0072ff,#00c8ffc2,#0072ff);
    }
`

export const TD = styled.td`
    padding: 0.5rem;
`