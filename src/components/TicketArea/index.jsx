import styled from 'styled-components';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react';
import { SubTitle } from '../TicketArea/SubTitle';
import { Title } from '../TicketArea/Title';
import { Button } from '../TicketArea/Button';
import Link from '../Link';
import { Card } from '../TicketArea/Card'
import { mockCard, mockHospedagem } from './MockTicket';

dayjs.extend(CustomParseFormat);

export default function PayOptions() {
    const [userTicket, setUserTicket] = useState({ ticketStatus: '', ticketValue: '', includesHotel: false, isRemote: false });
    const [ticketModality, setTicketModality] = useState(null);
    const [showHotel, setShowHotel] = useState(null);

    const totalPrice = () => {
        let price = 0;

        if (ticketModality) {
            price += mockCard.find((item) => item.name === ticketModality).price;
        }

        if (showHotel) {
            price += mockHospedagem.find((item) => item.name === showHotel).price;
        }

        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
    };


    return (
        <>
            <Title title="Ingresso e pagamento" />
            <SubTitle title="Primeiro, escolha sua modalidade de ingresso" />

            <StyledCard >
                {mockCard.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        price={`R$${item.price},00`}
                        selectedName={ticketModality}
                        setSelectedName={setTicketModality}
                        setUserTicket={setUserTicket}
                        userTicket={userTicket}
                    />
                ))}
            </StyledCard>

            {ticketModality === 'Presencial' && (
                <>
                    <SubTitle title="Ótimo! Agora escolha sua modalidade de hospedagem" />
                    <StyledCard>
                        {mockHospedagem.map((item, index) => (
                            <Card
                                key={index}
                                name={item.name}
                                price={`R$${item.price},00`}
                                selectedName={showHotel}
                                setSelectedName={setShowHotel}
                                setUserTicket={setUserTicket}
                            />
                        ))}
                    </StyledCard>
                </>
            )}

            {(ticketModality === 'Online' || showHotel) && (
                <>
                    <SubTitle title={`Fechado! O total ficou em ${totalPrice()}. Agora é só confirmar`} />
                    <Link to="/dashboard/hotel"> <Button button="RESERVAR INGRESSO" /></Link>

                </>
            )}
        </>
    );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;