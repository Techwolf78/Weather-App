import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 2rem;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const AppLabel = styled.span`
    margin: 20px 25px 10px;
    text-align: center;
    width: 90%;

    & span {
        font-size: 28px;
        color: solid black;
        font-weight: bolder;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & img {
        width: 100px;
        height: 100px;
    }
`;

const CityNotFound = () => {
    return (
        <Container>
            <AppLabel>
                <img src={'/weather/icons/city-notfound.svg'} alt="City Not Found" />
                <span>City Not Found</span>
                </AppLabel>
        </Container>
    );
}

export default CityNotFound;