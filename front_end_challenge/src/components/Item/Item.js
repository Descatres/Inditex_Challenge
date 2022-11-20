import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Item.module.css";
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

  // const [search, setSearch] = useState({
  //   search: "",
  //   list: [],
  // });

  // const handleChange = (e) => {
  //   const results = items.filter((item) => {
  //     if (e.target.value === "") return item;
  //     return item.title.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setSearch({
  //     search: e.target.value,
  //     list: results,
  //   });
  // };

  return (
    <div className={classes.item}>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search"
          //value={search}
          //onChange={handleChange}
        />
      </div>
      <Container style={{ width: "100%" }}>
        <CardGroup>{productsList}</CardGroup>
      </Container>
    </div>
  );
};

export default Item;
