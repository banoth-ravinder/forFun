import React, { useEffect } from "react";
import { ItemButton } from "./ItemButton";
import { OrderDetails } from "./OrderDetails";

export const MainPage = () => {
  const [coffeeCount, setCoffeeCount] = React.useState(0);
  const [teaCount, setTeaCount] = React.useState(0);
  const [milkCount, setMilkCount] = React.useState(0);
  const [cokeCount, setCokeCount] = React.useState(0);
  const [beerCount, setBeerCount] = React.useState(0);

  const [totalCount, setTotalCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  useEffect(() => {
    setTotalCount(coffeeCount + teaCount + milkCount + cokeCount + beerCount);
    setTotalPrice(
      coffeeCount * 480 +
        teaCount * 280 +
        milkCount * 180 +
        cokeCount * 190 +
        beerCount * 580
    );
  }, [coffeeCount, teaCount, milkCount, cokeCount, beerCount]);

  return (
    <div>
      <ItemButton
        id="coffee"
        title="Coffee 480 yen"
        onClick={() => {
          setCoffeeCount(coffeeCount + 1);
        }}
        count={coffeeCount}
        countId="coffee-count"
      />
      <ItemButton
        id="tea"
        title="Tea 280 yen"
        onClick={() => {
          setTeaCount(teaCount + 1);
        }}
        count={teaCount}
        countId="tea-count"
      />
      <ItemButton
        id="milk"
        title="Milk 180 yen"
        onClick={() => {
          setMilkCount(milkCount + 1);
        }}
        count={milkCount}
        countId="milk-count"
      />
      <ItemButton
        id="coke"
        title="Coke 190 yen"
        onClick={() => {
          setCokeCount(cokeCount + 1);
        }}
        count={cokeCount}
        countId="coke-count"
      />
      <ItemButton
        id="beer"
        title="Beer 580 yen"
        onClick={() => {
          setBeerCount(beerCount + 1);
        }}
        count={beerCount}
        countId="beer-count"
      />

      <OrderDetails total={totalPrice} noOfItems={totalCount} />
    </div>
  );
};
