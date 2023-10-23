import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';

export default function Hotel() {

const [selecionarHotel, setSelecionarHotel] = useState([])
const [cards,setCards] = useState([]);
const [selecionarRoom, setSelecionarRoom] = useState([])
const [cardsRoom, setCardsRoom] =useState([]);
const { userData } = useContext(UserContext);


  useEffect(()=>{
    try{
      const promise = axios.get("http://localhost:4000/hotels/",  {
      headers: {
        'Authorization': `Bearer ${userData.token}`
      }});
      promise.then((res) => {
        setCards(res.data);
      })

    }
    catch(err){
      console.log(err.message)
    }
  },[]);


  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Sub>Primeiro, escolha seu hotel</Sub>
      <SelectHotel id = "hotel" value= {selecionarHotel}
        onChange={(e) => {
          setSelecionarHotel(e.target.value);
          cards(e.target.value);
        }}
        >
      {cards === undefined?(
        <h1>Carregando</h1>
      ):(cards.map(item => (
          <Card key={cards.id}>
            <img src={item.image}></img>
            <NameHotel>{item.name}</NameHotel>
            <BoldText>Tipos de acomodações</BoldText>
            <SimpleText>TODO</SimpleText>
            <BoldText>Vagas disponíveis</BoldText>
            <SimpleText>TODO</SimpleText>
          </Card>
        ))
      )}
      </SelectHotel>
      <RoomText>Ótima pedida! Agora escolha seu quarto:</RoomText>
      <RoomSelect id ="Room" value={ selecionarRoom }
      onChange={(e)=> {
        setSelecionarRoom(e.target.value);
        cardsRoom(e.target.value);
      }}
      >
        {cardsRoom}
      </RoomSelect>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  margin-bottom:18px;
`;

const Sub = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
  margin-bottom:18px;
`

const RoomText = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #8E8E8E;
  margin-top:33px;
  margin-bottom:33px;
`
const RoomSelect = styled.div`

`

const SelectHotel = styled.div`
  display:flex;
  margin-left:-19px;
`

const Card = styled.div`
  width: 196px;
  height: 264px;
  border-radius:10px;
  margin-left:19px;
  background: #EBEBEB;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  img{
    widht:100px;
    height:100px;
    background:#ABABAB;
    margin-bottom:10px;
    border-radius:5px;
  }
`

const NameHotel = styled.div`
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color:#343434;
`

const BoldText = styled.div`
font-size: 12px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
color: #3C3C3C;
margin-top:14px;
text-align: left;
width:100%;
padding-left:15px;
padding-rigth:15px;
`

const SimpleText = styled.div`
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color:#3C3C3C;
width:100%;
padding-left:15px;
padding-rigth:15px;
padding-bottom:2px;
`