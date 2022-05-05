import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavouriteContext from "../../store/favourites-context";

const MeetupItem = (props) => {
  const favouritesCtx = useContext(FavouriteContext);
  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from favourites" : "To favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
