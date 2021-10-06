import React from 'react';
import {Ionicons, Feather} from '@expo/vector-icons';
import { Container, Rate, RateContainer, ActionContainer, DeleteButton, DetailButton, Title } from './styles';


function FavoriteItem({data, deleteMovie, navigatePage}){
    return(
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74E"/>
                <Rate>6.2/10</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <Title size={14}>Ver detalhes</Title>
                </DetailButton>

                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Feather name="trash" size={24} color="#FFF"/>
                </DeleteButton>
            </ActionContainer>
        </Container>
    )
}

export default FavoriteItem;