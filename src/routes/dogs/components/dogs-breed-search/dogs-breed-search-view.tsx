import React, { FC } from 'react';
import Button from '../../../../components/button';
import Icon from '../../../../components/icon';
import './dogs-breed-search.scss';

export interface Props {
  handleSubmit: (event: any) => (void);
  handleChange: (event: any) => (void);
  dogsBreedValue: string;
  hasError: boolean;
}

const DogsBreedSearchView: FC<Props> = ({ handleSubmit, handleChange, dogsBreedValue, hasError }) => (
  <div className="mt-4">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10 search-input-section">
          <input
            type="text"
            onChange={handleChange}
            value={dogsBreedValue}
            className="search-input"
            aria-describedby="dogs breed input search"
            placeholder="Search for your favorite breed of dogs..."
          />
          {
            hasError &&
              <div className="invalid-search">Sorry! We couldn't find the dog breed that you're looking for.</div>
          }
        </div>
        <div className="col-md-2 search-button-section">
          <Button
            type="submit"
            theme="primary"
            className="search-button"
          >
            <Icon
              icon="searchIcon"
              alt="search icon"
              className="mr-3 search-icon"
            />
            <span className="search-message">Search</span>
          </Button>
        </div>
      </div>
    </form>
  </div>
);

export default DogsBreedSearchView;
