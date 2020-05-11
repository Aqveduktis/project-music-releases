import React from 'react'
import styled from 'styled-components'


const Card = styled.article`
width: 100%;
height: auto;
@media (min-width:576px){
  width: 50%;
}
@media (min-width:992px){
  width: 25%;
}

`
const Container = styled.div`
  width: 200px;
  min-width: 100%;
  height: auto;
  margin: 16px auto;  
`

const Thumbnail = styled.img`
width: 200px;
height: 200px;
background-color: gray;
background-image: url(${props=>props.img});
background-size: cover;
background-position: center;

`

export const AlbumCard = ({object}) => {

  return(
    
    <Card>
      <Thumbnail img={object.images[0].url} />
      <Container>
      <p>{object.name}</p>
      <p> {object.artists.map((artist)=>(<>{artist.name}</>))} </p>
      </Container>
      </Card>
  )
} 