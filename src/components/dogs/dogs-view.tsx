import React from 'react';
import styled from '@emotion/styled';
import Header from '../header';
import Search from './components/dogs-breed-search';
import LoadMore from './components/load-more';
import DogsBreed from './components/dogs-breed';
import Icon from '../icon';
import { colors, fonts } from '../../assets';

export interface DogsViewProps {
  dogsBreedDogs: Dog[];
  favoriteDogs: Dog[];
  isLoading: boolean;
  showLoadMore: boolean;
}

const DogsView: React.FC<DogsViewProps> = (props) => (
  <DogsContainer>
    <Header style={DogBreedsHeaderStyles}>
      <DogBreedsHeaderTitle>Dog Breeds</DogBreedsHeaderTitle>
      <Icon icon="redHeartIcon" alt="red heart icon" />
    </Header>
    <Search />
    <DogsBreed dogs={props.dogsBreedDogs} isLoading={props.isLoading} />
    {
      props.showLoadMore && <LoadMore />
    }
    <HorizontalSeparator />
    <Header style={favoriteHeaderStyles}>
      <Icon icon="redHeartIcon" alt="red heart icon" />
      <FavoriteHeaderTitle>Favorites</FavoriteHeaderTitle>
    </Header>
    {
      !props.isLoading &&
        <DogsBreed dogs={props.favoriteDogs} />
    }
  </DogsContainer>
);

const DogsContainer = styled.div({
  height: '100%',
  margin: '0 auto',
  paddingTop: '60px',
  width: '80%',
});

const HorizontalSeparator = styled.div({
  backgroundColor: colors.alto,
  height: '2px',
  margin: '40px 0px',
  width: '100%',
});

const DogBreedsHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const DogBreedsHeaderTitle = styled.h1({
  fontSize: fonts.fontLg,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '33px',
});

const favoriteHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
};

const FavoriteHeaderTitle = styled.h1({
  fontSize: fonts.fontLg,
  fontStyle: 'normal',
  fontWeight: 700,
  lineheight: '16px',
  paddingLeft: '26px',
});

export default DogsView;
