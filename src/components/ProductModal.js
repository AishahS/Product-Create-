import Modal from "react-modal";
import { useState } from "react";

const ProductModal = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: null,
  });
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(product);
          props.addProduct(product);
          props.closeModal();
        }}
      >
        <div class="form-group">
          <label>Name</label>
          <input
            onChange={(event) =>
              setProduct({ ...product, name: event.target.value })
            }
            type="name"
            class="form-control"
            placeholder="Enter name"
          />
          <label>Description</label>
          <input
            onChange={(event) =>
              setProduct({ ...product, description: event.target.value })
            }
            type="text"
            class="form-control"
            placeholder="Enter Product Description"
          />
          <label>Image URL</label>
          <input
            onChange={(event) =>
              setProduct({ ...product, image: event.target.value })
            }
            type="text"
            class="form-control"
            placeholder="Enter Product Image URL"
          />
          <label>Price</label>
          <input
            onChange={(event) =>
              setProduct({ ...product, price: event.target.value })
            }
            type="number"
            class="form-control"
            placeholder="Enter Product Price"
            min={20}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ProductModal;
