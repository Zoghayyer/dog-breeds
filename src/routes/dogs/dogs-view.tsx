import React from 'react';
import Header from '../../components/header';
import Separator from '../../components/separator';
import Search from './components/dogs-breed-search';
import LoadMore from './components/load-more';
import DogsBreed from './components/dogs-breed';
import Icon from '../../components/icon';
import './dogs.scss';

export interface DogsViewProps {
  dogsBreedDogs: Dog[];
  favoriteDogs: Dog[];
  isLoading: boolean;
  showLoadMore: boolean;
}

const DogsView: React.FC<DogsViewProps> = (props) => (
  <div className="dogs-container">
    <Header className="dog-breeds-header">
      <h1>Dog Breeds</h1>
      <Icon icon="redHeartIcon" alt="red heart icon" />
    </Header>
    <Search />
    <DogsBreed dogs={props.dogsBreedDogs} isLoading={props.isLoading} />
    {
      props.showLoadMore && <LoadMore />
    }
    <Separator type="horizontal" />
    <Header className="favorites-header">
      <Icon icon="redHeartIcon" alt="red heart icon" />
      <h1>Favorites</h1>
    </Header>
    {
      !props.isLoading &&
        <DogsBreed dogs={props.favoriteDogs} />
    }
  </div>
);

export default DogsView;
