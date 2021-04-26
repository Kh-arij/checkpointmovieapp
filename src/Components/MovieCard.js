import React from 'react'
import {Card,Button}    from 'react-bootstrap'
 function MovieCard({movie}) {
     console.log(movie)
    //  const {title,description,posterURL,rating} = movie.props
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL}  style={{width:'350px'}} />
  <Card.Body>
    <Card.Title>   {movie.title} </Card.Title>
    <Card.Text>
            {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
