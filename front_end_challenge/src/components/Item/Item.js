import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Item.module.css";

import Search from "../Search/Search";
import { Container, Button, Card, CardGroup } from "react-bootstrap";

const Item = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
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
    };

    fetchItems();
  }, []);

  const [models, setModels] = useState([]);
  useEffect(() => {
    const loadedModels = [];
    for (const key in items.model) {
      loadedModels.push({
        model: items[key].model,
      });
      console.log(loadedModels.model);
    }
    setModels(loadedModels);
  }, [items]);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const loadedBrands = [];
    for (const key in items.brand) {
      loadedBrands.push({
        brand: items[key].brand,
      });
      console.log(loadedBrands.brand);
    }
    setModels(loadedBrands);
  }, []);

  let productsList = items.map((item) => (
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
      <Search model={models} />
      <Container style={{ width: "100%" }}>
        <CardGroup>{productsList}</CardGroup>
      </Container>
    </div>
  );
};

export default Item;
