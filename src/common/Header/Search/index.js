import { useLocation } from 'react-router-dom';

import search from '../../../images/Search.svg';
import searchQueryParamName from '../../../searchQueryParamName';
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from '../../../useQueryParameters';
import {
  Search,
  SearchImage,
  SearchInput,
} from './styled';

function HeaderSearch()  {
  const location = useLocation();
  let placeholder = "";
  if (location.pathname.startsWith("/movie-list")) {
    placeholder = "Search for movies...";
  
  } else if (location.pathname.startsWith("/people")) {
    placeholder = "Search for people...";
  };

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Search>
      <SearchImage src={search} alt="" />
      <SearchInput placeholder={placeholder} 
      value={query || ""} 
      onChange={onInputChange} />
    </Search>
  );
}

export default HeaderSearch;
