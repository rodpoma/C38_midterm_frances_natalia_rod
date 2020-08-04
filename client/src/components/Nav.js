import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Nav() {
  let history = useHistory();
  const handleClickDrawings = () => {
    history.push('/carousel1');
  };
  const handleClickPaintings = () => {
    history.push('/carousel2');
  };
  const handleClickSculpt = () => {
    history.push('/carousel3');
  };
  const handleClickWeapons = () => {
    history.push('/carousel4');
  };
  const handleClickPhoto = () => {
    history.push('/carousel5');
  };

  const handleClickHome = () => {
    history.push('/');
  };
  return (
    <nav className="arNav">
      {/* <Badge variant="info" onClick={handleClickHome}>
        Modern Art Generator
      </Badge> */}
      <Link to="/" className="ARLOGO"></Link>
      <div className="arSearch">
        <input></input>
      </div>

      {/* <DropdownButton id="dropdown-item-button" title="Galleries">
          <Dropdown.ItemText>Navigate:</Dropdown.ItemText>
          <Dropdown.Item onClick={handleClickDrawings}>Drawings</Dropdown.Item>
          <Dropdown.Item onClick={handleClickPaintings}>
            Paintings
          </Dropdown.Item>
          <Dropdown.Item onClick={handleClickSculpt}>Sculpture</Dropdown.Item>
          <Dropdown.Item onClick={handleClickWeapons}>
            Weapons and Ammunition
          </Dropdown.Item>
          <Dropdown.Item onClick={handleClickPhoto}>Photographs</Dropdown.Item>
        </DropdownButton> */}

      {/* </div> */}
    </nav>
  );
}
export default Nav;
