import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/pokecard.css'
import { Badge } from 'react-bootstrap'
import PokemonVersions from '../componentes/PokemonVersions'
import { Container, Row, Col } from 'react-bootstrap'


export default function Profile({dataPokemons}) {

  const getHeight = () => {
    if (dataPokemons.height) {
      return dataPokemons.height / 10 + 'm'
  }
}

const getWeight = () => {
  if (dataPokemons.weight) {
    return dataPokemons.weight / 10 + 'kg'
}
}

const getAbilities = () => {
  if (dataPokemons.abilities[2]) {
    return ( 
      dataPokemons.abilities[0].ability.name +
      ', ' +
      dataPokemons.abilities[1].ability.name +
      ' and ' +
      dataPokemons.abilities[2].ability.name
    )
  }else if (dataPokemons.abilities[1]) {
    return (
      dataPokemons.abilities[0].ability.name +
      ' and ' +
      dataPokemons.abilities[1].ability.name
    )
  } else {
    return dataPokemons.abilities[0].ability.name
  }
}

const getType = () => {
  if(dataPokemons.types[1]) {
    return(
      dataPokemons.types[0].type.name[0].toUpperCase() +
      dataPokemons.types[0].type.name.substring(1) +
      ' and '+
      dataPokemons.types[1].type.name[0].toUpperCase() +
      dataPokemons.types[1].type.name.substring(1)
    )
  }else {
    return dataPokemons.types[0].type.name[0].toUpperCase() + dataPokemons.types[0].type.name.substring(1)
  }
}

  const getOthersVersions = () => {
    if (dataPokemons.sprites.front_female) {
      return (
        <>
        <Col  xs='12' sm='6' md='6' lg='4' className='columns'>
          <PokemonVersions Name={'Female'} Src={dataPokemons.sprites.front_female} />
        </Col>
        <Col  xs='12' sm='6' md='6' lg='4' className='columns'>
          <PokemonVersions Name={'Shiny'} Src={dataPokemons.sprites.front_shiny} />
        </Col>
        <Col  xs='12' sm='6' md='6' lg='4' className='columns'>
          <PokemonVersions Name={'Shiny Female'} Src={dataPokemons.sprites.front_shiny_female} />
        </Col>
        </>
      )
    } else {
      return (
        <Col  xs='12' sm='6' md='6' lg='4' className='columns'>
          <PokemonVersions Name={'Shiny'} Src={dataPokemons.sprites.front_shiny} />
        </Col> 
      )
    }
  }

  let gif = dataPokemons.sprites['versions']['generation-v']['black-white']['animated']['front_default']

  return (
    <div style={{
      textAlign: 'center',

    }}>
      <h1>{dataPokemons.name[0].toUpperCase() + dataPokemons.name.substring(1)} | number {dataPokemons.id}</h1>
      <img className='image' src={dataPokemons.sprites['front_default']}/>

      <h3>Infos</h3>
      <Table striped bordered hover style={{border: '1px black solid', background: 'white'}}>
      <thead>
        <tr>
          <th>Height</th>
          <th>Weight</th>
          <th>Abilities</th>
          <th>Types</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{getHeight()}</td>
          <td>{getWeight()}</td>
          <td>{getAbilities()}</td>
          <td>{getType()}</td>
        </tr>
      </tbody>
    </Table>

    <h3>Stats</h3>
    <Table striped bordered hover style={{border: '1px black solid', background: 'white'}}>
      <thead>
        <tr>
          <th>Hp</th>
          <th>Attack</th>
          <th>Defense</th>
          <th>Special-Attack</th>
          <th>Special-Defense</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dataPokemons.stats[0].base_stat}</td>
          <td>{dataPokemons.stats[1].base_stat}</td>
          <td>{dataPokemons.stats[2].base_stat}</td>
          <td>{dataPokemons.stats[3].base_stat}</td>
          <td>{dataPokemons.stats[4].base_stat}</td>
          <td>{dataPokemons.stats[5].base_stat}</td>
        </tr>
      </tbody>
    </Table>

    <h3>Possible Attacks</h3>
    <div>
      {dataPokemons.moves.map((move) => (<Badge className='skills' pill bg="light" text="dark">{move.move.name}</Badge>))}
    </div>

    <h3>Others Versions</h3>
    <Container style={{maxWidth: '100%'}}>
        <Row>
            {getOthersVersions()}
        </Row>
      </Container>
    </div>
  )
}
