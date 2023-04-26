import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import TextField from "../TextField";
import "./Forms.css";

const Forms = (props) => {

  const [name, setName] = useState ('')
  const [role, setRole] = useState ('')
  const [image, setImage] = useState ('')
  const [team, setTeam] = useState ('')

  const onSave = (event) => {
    event.preventDefault()
    props.toContributorRegistered({
      name,
      role,
      image,
      team
    })
    setName ('')
    setRole ('')
    setImage ('')
    setTeam ('')
  }

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2>Fill in the data to create your contributor's card</h2>
        <TextField 
          required={true} 
          label="Name:" 
          placeholder="Enter your name"
          value={name}
          onChange={value => setName(value)}
        />
        <TextField 
          required={true} 
          label="Role:" 
          placeholder="Enter your role"
          value={role}
          onChange={value => setRole(value)}
        />
        <TextField 
          label="Image:" 
          placeholder="Enter your image url"
          value={image}
          onChange={value => setImage(value)}
        />
        <DropdownList 
          required={true} 
          label="Team:" 
          items={props.teams}
          value={team}
          onChange={value => setTeam(value)}
        />
        <Button>
          Create Card
        </Button>
      </form>
    </section>
  );
};

export default Forms;