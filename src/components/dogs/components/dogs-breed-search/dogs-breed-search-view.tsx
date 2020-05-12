import React, { FC } from 'react';
import styled from '@emotion/styled';
import Button from '../../../button';
import Icon from '../../../icon';
import { colors, fonts } from '../../../../assets';

export interface Props {
  handleSubmit: (event: any) => (void);
  handleChange: (event: any) => (void);
  dogsBreedValue: string;
  hasError: boolean;
}

const DogsBreedSearchView: FC<Props> = ({ handleSubmit, handleChange, dogsBreedValue, hasError }) => (
  <DogsBreedSearchViewContainer>
    <form onSubmit={handleSubmit}>
      <Row>
        <ColumnMd10>
          <input
            type="text"
            onChange={handleChange}
            value={dogsBreedValue}
            style={searchInputStyles}
            aria-describedby="dogs breed input search"
            placeholder="Search for your favorite breed of dogs..."
            className="search-input"
          />
          {
            hasError &&
              <InvalidSearch className="invalid-search">
                Sorry! We couldn't find the dog breed that you're looking for.
              </InvalidSearch>
          }
        </ColumnMd10>
        <ColumnMd2>
          <Button
            type="submit"
            size="sm"
            style={searchButtonStyles}
            className="search-button"
          >
            <Icon
              icon="searchIcon"
              alt="search icon"
              style={searchIconStyles}
            />
            <SearchMessage>Search</SearchMessage>
          </Button>
        </ColumnMd2>
      </Row>
    </form>
  </DogsBreedSearchViewContainer>
);

const DogsBreedSearchViewContainer = styled.div({
  marginTop: '15px',
});

const Row = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '-15px',
  marginRight: '-15px',
});

const ColumnMd10 = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  width: 100%;

  @media(min-width: 768px) {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    padding-right: 0px;
  }
`;

const ColumnMd2 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 8px;

  @media(min-width: 768px) {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    padding-left: 0px;
    margin-top: 0px;
  }
`;

const searchInputStyles = {
  backgroundColor: colors.mostlyWhiteGrey,
  border: 'none',
  borderRadius: '4px',
  fontSize: fonts.fontMd,
  height: '36px',
  padding: '15px',
  width: '100%',
};

const InvalidSearch = styled.div({
  color: colors.vividRed,
  fontSize: fonts.fontXs,
  marginTop: '3px',
});

const SearchMessage = styled.span({
  display: 'inline-block',
  fontSize: fonts.fontSm,
  fontStyle: 'normal',
  lineHeight: '19px',
  position: 'relative',
  top: '-3px',
});

const searchIconStyles = {
  height: '18px',
  marginRight: '15px',
  width: '18px',
};

const searchButtonStyles = {
  width: '100%',
};

export default DogsBreedSearchView;
