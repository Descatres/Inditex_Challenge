import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Item.module.css";
import { Container, Button, Card, CardGroup } from "react-bootstrap";
import {
  localStorageSaveItems,
  localStorageGetItems,
} from "../../utils/localStorage";

const Item = () => {
  const [items, setItems] = useState(localStorageGetItems());
  useEffect(() => {
    if (items.length > 0) return;
    const fetchItems = async () => {
      const response = await fetch(
        "https://front-test-api.herokuapp.com/api/product"
      );
      const responseData = await response.json();

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: responseData[key].id,
          brand: responseData[key].brand,
          model: responseData[key].model,
          price: responseData[key].price,
          imgUrl: responseData[key].imgUrl,
        });
      }
      setItems(loadedItems);
      // save on local storage
      localStorageSaveItems(loadedItems);
    };

    fetchItems();
  }, [items.length]);
  
  const [ItemsListFilter, setItemsListFilter] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (items.length === 0) return;
    let ItemsListFiltered;

    if (search.length === 0) ItemsListFiltered = [...items];
    else
      ItemsListFiltered = items.filter(
        (elem) =>
          (elem.brand.toUpperCase().includes(search.toUpperCase()) || elem.model.toUpperCase().includes(search.toUpperCase()))
      );
    const refresh = setTimeout(() => {
      setItemsListFilter(ItemsListFiltered);
    }, 0);

    return () => {
      clearTimeout(refresh);
    };
  }, [search, items]);

  let itemsList = ItemsListFilter.map((item) => (
    <div key={item.id}>
      <Card style={{ width: "auto", margin: "10px" }}>
        <center>
          <Card.Img
            src={item.imgUrl}
            style={{ width: "16rem", margin: "15px" }}
          />
        </center>
        <Card.Body>
          <Card.Title>
            {item.brand} {item.model}
          </Card.Title>
          <Card.Subtitle style={{ marginTop: "5px", marginBottom: "10px" }}>
            {item.price}€
          </Card.Subtitle>
          <Link to={`/item_list/description/${item.id}`}>
            <center>
              <Button variant="secondary">Product details</Button>
            </center>
          </Link>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div className={classes.item}>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(elem) => {
            setSearch(elem.currentTarget.value);
          }}
        />
      </div>
      <Container style={{ width: "100%" }}>
        <CardGroup>{itemsList}</CardGroup>
      </Container>
    </div>
  );
};

export default Item;
