import React from 'react'
import styled from 'styled-components'
import {IconPlay} from './IconPlay'

const Card = styled.article`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media (min-width:576px){
  width: 50%;
}
@media (min-width:992px){
  width: 25%;
}

`
const Container = styled.div`
  width: 200px;
  max-width: 100%;
  height: auto;
  margin: 16px auto;  
`

const Thumbnail = styled.a`
width: 200px;
height: 200px;
max-width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: gray;
background-image: url(${props=>props.img});
background-size: cover;
background-position: center;

& svg {
  width: 50px;
  height: 50px;
  visibility: hidden;
}
&:hover svg {
  visibility: visible;
}
svg:hover {
  width: 100px;
  height: 100px;
}
`
const Paragraf = styled.p`
  color: gray;
`


export const AlbumCard = ({object}) => {

  return(
    
    <Card>
      <Thumbnail href={object.href} img={object.images[0].url}><IconPlay /></Thumbnail>
      <Container>
      <p>{object.name}</p>
      <div>{object.artists.map((artist)=>(<Paragraf>{artist.name}</Paragraf>))}</div>
      <p>  </p>
      </Container>
      </Card>
  )
} 