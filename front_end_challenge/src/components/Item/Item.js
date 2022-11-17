import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './Item.module.css'

import {Container, Button, Card, CardGroup} from 'react-bootstrap'

/*
const dummy_items = [
    { id: "i0", brand: "Apple", model: "iPhone 10", price: 599 },
    { id: "i1", brand: "Apple", model: "iPhone 11", price:  699 },
    { id: "i2", brand: "Apple", model: "iPhone 12", price: 799 },
    { id: "i3", brand: "Apple", model: "iPhone 13", price: 899 },
    { id: "i4", brand: "Apple", model: "iPhone 14", price: 999 },
];
*/

// TODO: Tratar dos onClick para ir para a pagina da descrição dos produtos quando o botao Description é clicado
// TODO: É mesmo preciso um componente só para imagens? basta a liha 36, no?
const Item = () => { 

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
           const response = await fetch('https://front-test-api.herokuapp.com/api/product');
           const responseData = await response.json();

            const loadedItems = [];

            // TODO: resolver o erro que isto causa
            for (const key in responseData){
                loadedItems.push({
                    id: key,
                    brand: responseData[key].brand,
                    model: responseData[key].model,
                    price: responseData[key].price,
                    imgUrl: responseData[key].imgUrl
                })
            };
            setItems(loadedItems);
        };

        fetchItems();
    }, []);
    // TODO: Mudar o path do id das descrições dos produtos (/description/:id) para o id real do produto
    let productsList = items.map((item)=> (
            <div>
                <Card style={{ width: '20.5rem' }}>
                    <Card.Img src={item.imgUrl}/>
                        <Card.Body>
                            <Card.Title>{item.brand} {item.model}</Card.Title>
                            <Card.Subtitle style={{ marginTop: '5px', marginBottom: '10px'}}>{item.price}€</Card.Subtitle>
                            <Link to="/description/:id">
                                <Button variant="primary">
                                    Description
                                </Button>
                            </Link>
                            <Button variant="secondary" style={{marginLeft: '10px'}}>Add to Cart</Button>
                        </Card.Body>
                </Card>
            </div>
    ));

    return(
        <div className= {classes.item}>
            <Container className='p-1'>
                <CardGroup >{productsList}</CardGroup>          
            </Container>
        </div>
    ) 
}

export default Item;