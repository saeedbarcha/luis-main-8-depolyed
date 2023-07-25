import styled from 'styled-components'

export const FormCont = styled.form `
    width : 100%;
    margin:auto;
    display : flex;
    padding-bottom: 15px;
    margin-bottom: 20px;
    justify-content: space-evenly;
    align-items : center;
    flex-direction : column;
    border-radius: 12px;   
    border:1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`


export const FormHead = styled.h5 `
    width: 85%;
    height: 8vh;
    padding-top: 30px;
    color: black;
    font-family: corbel light;
    font-weight: 900;
    font-size: 37px;
    margin: 0;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      font-size: 30px;
    }
  
    @media (max-width: 320px) {
      font-size: 22px;
    }
`

export const FormBody = styled.div `
    width: 95%;
    min-height: 40vh;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }

`

export const Em = styled.div `
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 5px;
`

export const SvgStyle = {
    height: "80%",
    width: "10%",
    color : "#e98337"
}


export const FormInputDiv =styled.div `
  width: 40%;
  height: 7vh;
  margin: 6px 10px;
  padding: 2px 0 2px 8px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display : flex;
  justify-content : space-between;
  align-items : center; 

 

@media (max-width: 600px) {
  width: 100%;
  margin: 6px 6px;
}

`

export const FormInput = styled.input `
    width: 100%;
    border: none;
    background: transparent;
    height: 100%;
    text-align: center;
    transition : all ease-in-out 0.3s;
    color : black;

    &:focus {
        width: 80%;
        outline : none;
        text-align: start;
        transition : all ease-in-out 0.3s;
    }
`

export const FormOption = styled.option `
    background : #fff;
    border-radius : 5px;
    text-align: center;
    color : black;
   
    &:focus {
        width: 80%;
        outline : none;
        text-align: start;
        transition : all ease-in-out 0.3s;
    };
    &:hover {
      background: pink;
      cursor: pointer;
    }

`

export const FormSelect = styled.select `
    width: 100%;
    border: none;
    background: transparent;
    height: 100%;
    text-align: center;
    transition : all ease-in-out 0.3s;
    color : #677568;

    &:focus {
        width: 80%;
        outline : none;
        // padding: 0px 5px;
        text-align: start;
        transition : all ease-in-out 0.3s;
    }
`


export const FormButton = styled.button `
    width: 20%;
    height: 6vh;
    border-radius: 8px;
    border: none;
    background : #e98337;
    color: #fff;
    font-family: corbel light;
    font-weight: 500;
    font-size: 17px;
    transition : 0.3s all ease-in-out;
    cursor : pointer;
 
  @media (max-width: 992px) {
    width: 35%;
    height: 6vh;
    margin: 6px 0px;
  }
  @media (max-width: 480px) {
    width: 40%;
    height: 5vh;
    margin: 6px 0px;
  }
    &:hover {
        color : #fff;
        background : #F17B21;
        transition : 0.3s all ease-in-out;
        font-weight : 700;
        border : 1px solid #00a99e;
        box-shadow: 0px 2px 11px 0px #326867;
    }
`
