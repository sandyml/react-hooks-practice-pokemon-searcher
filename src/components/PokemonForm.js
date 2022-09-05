import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const pokemonURL = "http://localhost:3001/pokemon";

function PokemonForm({ addPokemonUpdateState }) {
  // const [formData, setFormData] = useState({
  //   id: "",
  //   name: "",
  //   hp: 0,
  //   front: "",
  //   back: "",
  // });

  const initialState = {
    id: "",
    name: "",
    hp: 0,
    front: "",
    back: "",
  }

  const [formData, setFormData] = useState(initialState);



  const handleChange = (e) => {
    setFormData({
      ...formData, // array of poke data
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = () => {
    let newPokemon = {
      id: formData.id,
      name: formData.name,
      hp: parseInt(formData.hp),
      sprites: {
        front: formData.front,
        back: formData.back,
      },
    };

    fetch(pokemonURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((resp) => resp.json())
      .then(addPokemonUpdateState);
      // .then(data => addPokemonUpdateState(data))

      setFormData(initialState)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      {/* <iconify-icon icon="simple-icons:pokemon"></iconify-icon> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleChange}
            value={formData.name}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            onChange={handleChange}
            value={formData.hp}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            onChange={handleChange}
            value={formData.front}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
            onChange={handleChange}
            value={formData.back}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
