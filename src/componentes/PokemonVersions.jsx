import Card from 'react-bootstrap/Card';

function PokemonVersions({Name, Src}) {
  return (
    <Card style={{ width: '100%', textAlign: 'center', padding: '15px'}}>
      <Card.Img style={{width: '170px', height: '170px', margin: 'auto', padding: '5px'}} variant="top" src={Src} />
      <hr style={{
        border: '1px solid black'}}/>
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonVersions;