import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './App.css';

 const StyleMenu = ({setSkin}) => {

     


        return (
            <div>
          <Dropdown onSelect={(key, event) => setSkin(event.target.innerHTML)}  id="dropdown-basic-button">
  <Dropdown.Toggle variant="success" id="ChessCApp">
    ChessCApp
  </Dropdown.Toggle>

  <Dropdown.Menu>
    
    <Dropdown.Item value="Traditional">Traditional</Dropdown.Item>
    <Dropdown.Item value="Chess2">Chess 2: All Horsies</Dropdown.Item>
    <Dropdown.Menu value="Disney">
    Disney
  </Dropdown.Menu>

  <Dropdown.Menu>
    <Dropdown.Item value="princess">Princess'</Dropdown.Item>
    <Dropdown.Item value="HvV">Heroes v Villains</Dropdown.Item>
    <Dropdown.Item value="Pixar">Pixar</Dropdown.Item>
  </Dropdown.Menu>

  </Dropdown.Menu>

  </Dropdown>
          </div>
        );
    }



export default StyleMenu;


