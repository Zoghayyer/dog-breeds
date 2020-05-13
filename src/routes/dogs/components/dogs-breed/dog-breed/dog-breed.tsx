import React from 'react';
import Image from '../../../../../components/image';
import Icon from '../../../../../components/icon';

export interface OwnProps {
  dog: Dog;
  handleClickFavorite: (id: number) => (void);
}

class DogBreed extends React.Component<OwnProps> {
  public handleClick = () => {
    const { dog: { id }, handleClickFavorite } = this.props;
    handleClickFavorite(id);
  }

  public render = () => {
    const { alt, url, id, favorite } = this.props.dog;

    return (
      <div key={`${id}-${url}`}>
        <Image src={url} className="dogs-image" alt={alt} />
        <Icon
          onClick={this.handleClick}
          icon={favorite ? 'redHeartIcon' : 'whiteHeartIcon'}
          alt="white heart icon"
          className="heart-icon"
        />
      </div>
    );
  }
}

export default DogBreed;
