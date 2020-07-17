import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridGif from './../components/GridGif';
import Search from './../components/Search';
import Loading from './../components/Loading';
import { GET_TRENDING, SEARCH_GIFS } from './../stores/actions/gifs';
const Gifs = () => {
  const [search, setsearch] = useState(null);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.gifs.gifs);
  const searchGif = (searchValue) => {
    setloading(true);
    const formatSearchValue = searchValue.trim().replace(' ', '+');
    dispatch({ type: SEARCH_GIFS, payload: formatSearchValue });
    setsearch(searchValue);
    setloading(false);
  };
  useEffect(() => {
    setloading(true);
    dispatch({ type: GET_TRENDING, payload: {} });
    setloading(false);
  }, [dispatch]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Search searchGif={searchGif} />
      {}
      <GridGif gifArray={trending} search={search} />
    </>
  );
};

export default Gifs;
