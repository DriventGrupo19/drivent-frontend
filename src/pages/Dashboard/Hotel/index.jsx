import { styled } from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import { useState } from 'react';

export default function Hotel() {
  const { hotels } = useHotel();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <>
      <TextRow>Primeiro, escolha seu hotel:</TextRow>
      <HotelContainerBox>
        {hotels?.map((hotel) => (
          <HotelButton
            key={hotel.id}
            hotel={hotel}
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
            setRooms={setRooms}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
      </HotelContainerBox>
      {selectedHotel && (
        <RoomsContainer
          rooms={rooms}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          updateBooking={updateBooking}
          getBookings={getBookings}
          bookingId={bookingId}
          setUpdateBooking={setUpdateBooking}
        />
      )}
    </>
  );
}

const HotelContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const TextRow = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 12px;
  color: #8e8e8e;
`;
