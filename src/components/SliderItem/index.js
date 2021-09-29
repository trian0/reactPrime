import React from 'react';
import {Container, Rate, BannerItem, Title, RateContainer} from './styles';
import {Ionicons} from '@expo/vector-icons';

function SliderItem ( {data} ){
    return(
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
            />

            <Title numberOfLines={1}>{data.original_title}</Title>
            
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#e7a74e"/>
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;