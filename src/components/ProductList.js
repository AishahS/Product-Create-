// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import AddButton from "./buttons/AddButton";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    props.setTitle("Products");
  });
  const productList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
        selectProduct={props.selectProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        {productList} <AddButton addProduct={props.addProduct} />
      </ListWrapper>
    </div>
  );
};

export default ProductList;
