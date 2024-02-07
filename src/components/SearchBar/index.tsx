import React, {
  FC,
  HTMLAttributes,
  useState,
} from 'react';

//styles
import './styles.scss';
//components
import { Input } from '../Input';
//assets
import { searchIcon } from '../../assets/icons';

interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {
  callBack?: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ callBack }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (val: string) => {
    setSearchText(val)
    callBack && callBack(val); // call the callBack function and pass the input value
  }

  return (
    <div className='searchBar'>
      <Input
        label=''
        className='searchBar__input'
        onChange={(e) => handleChange(e.target.value)}
        value={searchText}
        type='email'
        name='email'
        placeholder='e.g. student name, year'
      />
      <div className='align-center mla'>
        <img
          src={searchIcon}
          className={'button__icon mra'}
          alt='search'
        />
        <span>Filter</span>
      </div>
    </div>
  );
};