import {
  faPlane,
  faBurger,
  faBus,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

export function getTravelPhrasesButtonsData() {
  return TRAVELPHRASESBUTTONSDATA;
}

export const TRAVELPHRASESBUTTONSDATA = [
  {
    title: "Airport",
    icon: faPlane,
    route: "AirportPhrases",
  },
  {
    title: "Restaurant",
    icon: faBurger,
    route: "RestaurantPhrases",
  },
  {
    title: "Transport",
    icon: faBus,
    route: "TransportPhrases",
  },
  {
    title: "Groceries",
    icon: faBasketShopping,
    route: "GroceriesPhrases",
  },
];
