import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../css/pokecard.css'

function Pokemon({Name, Src, Type, Number}) {

  const PokeHandler = () => {
    if(Type[1]) {
      return(
        Type[0].type.name[0].toUpperCase() +
        Type[0].type.name.substring(1) +
        ' and '+
        Type[1].type.name[0].toUpperCase() +
        Type[1].type.name.substring(1)
      )
    }else {
      return Type[0].type.name[0].toUpperCase() + Type[0].type.name.substring(1)
    }
  }

  const PokeName = () => {
    if(Name) {
      return Name[0].toUpperCase() + Name.substring(1)
    }
  }
  
  
  return (
    <Card className='card'>
      <Card.Img className='image2' style={{width: '140px', height: '140px', margin: 'auto', padding: '5px'}} variant="top" src={Src} />
      <Card.Body style={{padding: '0px', margin: '0px'}}>
        <Card.Title>{PokeName()}</Card.Title>
        <Card.Text>
          {PokeHandler()} <br />
          {Number} <br />
        </Card.Text>
        <Link to={`/profile#${Number}`}><Button variant="primary">See more</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Pokemon;