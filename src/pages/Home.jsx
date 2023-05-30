import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect } from 'react';
import Pokemon from '../componentes/Pokemon';
import { Container, Row, Col } from 'react-bootstrap'
import '../css/pokecard.css'

export default function Home({setDataPokemons}) {
   const [pokemons, setPokemons] = useState([])
   useEffect(() => {
    getPokemons()
   }, [])
   

    const getPokemons = () => {
      let endpoints = []
      for (let i = 1; i <= 151; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(res => setPokemons(res))
    }

  return (
    <>
      <Container style={{maxWidth: '100%'}}>
        <Row>
          {pokemons.map((pokemon, key) => (
            <Col  xs='10' sm='6' md='4' lg='2' className='columns' key={key}>
              <div style={{margin: '0'}} onClick={() => setDataPokemons(pokemon.data)}>
                <Pokemon 
                  Name={pokemon.data.name}  
                  Src={pokemon.data['sprites']['front_default']} 
                  Type={pokemon.data.types}
                  Number={pokemon.data.id}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
