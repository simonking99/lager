import { useState, useEffect } from 'react';
import { Text, View, ScrollView, } from 'react-native';
import config from "../config/config.json";

function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  //Ändra texten här för alla produkter
  const list = products.map((product, index) => <Text style={{color: 'red'}} key={index}>{ product.name } - { product.stock } </Text>);

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock() {
  return (
    <ScrollView>
    <View>
      <Text style={{color: 'black', fontSize: 24}}>Lagerförteckning</Text >
      <StockList/>
    </View>
    </ScrollView>
  );
}
