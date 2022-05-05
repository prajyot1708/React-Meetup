import { createContext, useState } from "react";
const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetUpId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) =>
      prevUserFavourites.concat(favouriteMeetup)
    );
  }

  function removeFavouriteHandler(meetUpId) {
    setUserFavourites((prevUserFavourites) =>
      prevUserFavourites.filter((meetup) => meetUpId !== meetup.id)
    );
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetupId === meetup.id);
  }

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
