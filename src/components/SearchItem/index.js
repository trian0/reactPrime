import React from 'react';
import {Container, Banner, Title, RateContainer, Rate} from './styles';
import {Ionicons} from '@expo/vector-icons';


function SearchItem({data, navigatePage}){

    if(data.release_date === ''){
        alert('Filme ainda sem data');
        return;
    }

    function detailMovie(){
        navigatePage(data);
    }

    return(
        <Container activeOpacity={0.7} onPress={detailMovie}>
            {data?.poster_path ? (
                <Banner
                    resizeMethod="resize"
                    source={{uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
                />
            ) : (
                <Banner
                    resizeMethod="resize"
                    source={require('../../assets/semfoto.png')}
                />
            )}

            <Title>{data?.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#e7a7ae"/>
                <Rate>{data?.vote_average}/10</Rate> 
            </RateContainer>

        </Container>
    )
}

export default SearchItem;