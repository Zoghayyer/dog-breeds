import React from 'react';
import Image from '../../../../image';
import Icon from '../../../../icon';
import { colors } from '../../../../../assets';

export interface OwnProps {
  dog: Dog;
  handleClickFavorite: (id: number) => (void);
  className?: string;
}

export const DogBreed: React.FC<OwnProps> = (props) => {
  const { dog: { alt, url, id, favorite }, handleClickFavorite } = props;
  const handleClick = () => {
    handleClickFavorite(id);
  };

  return (
    <div className={`${id}-${url}`}>
      <Image src={url} style={dogsImageStyles} alt={alt} />
      <Icon
        onClick={handleClick}
        icon={favorite ? 'redHeartIcon' : 'whiteHeartIcon'}
        alt="white heart icon"
        style={heartIconStyles}
      />
    </div>
  );
};

const dogsImageStyles = {
  border: `1px solid ${colors.mostlyWhiteGrey}`,
  borderRadius: '6px',
  height: '200px',
  maxWidth: '100%',
  width: '200px',
};

const heartIconStyles = {
  cursor: 'pointer',
  left: '172px',
  position: 'relative',
  top: '-32px',
};

export default DogBreed;
