import { useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Button, Card, CardGroup, Form } from "react-bootstrap";
import classes from "./Description.module.css";
import {
  localStorageSaveDescription,
  localStorageGetDescription,
} from "../../utils/localStorage";

const Description = (props) => {
  let params = useParams();

  const colorsOptions = useRef();
  const storagesOptions = useRef();
  async function onAddCartHandler() {
    const postData = {
      id: params.id,
      colorCode: parseInt(colorsOptions.current.value),
      storageCode: parseInt(storagesOptions.current.value),
    };

    const response = await fetch(
      "https://front-test-api.herokuapp.com/api/cart",
      {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    props.setCounter(data.count);
  }

  const [description, setDescription] = useState(
    localStorageGetDescription(params.id)
  );
  useEffect(() => {
    if (description.length > 0) return;
    const fetchItems = async () => {
      const url =
        "https://front-test-api.herokuapp.com/api/product/" + params.id;

      const response = await fetch(url);
      const responseData = await response.json();

      const loadedItems = [responseData];

      setDescription(loadedItems);
      localStorageSaveDescription(loadedItems);
    };

    fetchItems();
  }, [params, description.length]);

  let colorsAvailable;
  description.forEach((element) => {
    colorsAvailable = element.options.colors.map((color) => (
      <option value={color.code} key={color.code}>
        {color.name}
      </option>
    ));
  });

  let storagesAvailable;
  description.forEach((element) => {
    storagesAvailable = element.options.storages.map((storage) => (
      <option value={storage.code} key={storage.code}>
        {storage.name}
      </option>
    ));
  });

  let productDescription = description.map((item) => (
    <div key={item.id} className={classes.Description}>
      <CardGroup style={{ marginLeft: "20%", marginRight: "20%" }}>
        <Card
          style={{
            width: "auto",
            height: "100%",
            borderColor: "white",
            fontSize: "20px",
          }}
        >
          <Card.Img
            variant="top"
            src={item.imgUrl}
            style={{
              width: "20rem",
              height: "auto",
              marginTop: "45px",
              borderColor: "white",
              fontSize: "20px",
            }}
          />
        </Card>
        <Card
          style={{
            width: "auto",
            height: "100%",
            borderColor: "white",
            fontSize: "20px",
            marginTop: "2%",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "30px" }}>
              {item.brand} {item.model}
            </Card.Title>
            <Card.Text>
              Operative System: {item.os}
              <br />
              CPU: {item.cpu}
              <br />
              Resolution: {item.displayResolution}
              <br />
              Size: {item.displaySize}
              <br />
              Primary Camera: {item.primaryCamera}
              <br />
              Secondary Camera: {item.secondaryCmera}
              <br />
              Ram: {item.ram}
              <br />
              Battery: {item.battery}
              <br />
              Weight: {item.weight}g
              <br />
            </Card.Text>

            <Form.Group className="mb-3">
              <Form.Label
                htmlFor="disabledSelect"
                style={{ fontWeight: "bold" }}
              >
                Color
              </Form.Label>
              <Form.Select ref={colorsOptions} required>
                {colorsAvailable}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                htmlFor="disabledSelect"
                style={{ fontWeight: "bold" }}
              >
                Storage
              </Form.Label>
              <Form.Select ref={storagesOptions} required>
                {storagesAvailable}
              </Form.Select>
            </Form.Group>
            <Card.Subtitle style={{ marginTop: "20px", fontSize: "21px" }}>
              Price: {item.price}€
            </Card.Subtitle>
            <Button
              onClick={onAddCartHandler}
              variant="secondary"
              style={{ marginTop: "20px" }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  ));

  return <div>{productDescription}</div>;
};

export default Description;
