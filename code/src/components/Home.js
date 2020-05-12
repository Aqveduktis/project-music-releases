import React from 'react'
import data from '../data.json'
import { AlbumCard } from './AlbumCard'
import {Header} from './Header'
import styled from 'styled-components'

const Grid = styled.section`
  width: 90vw;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  @media (min-width:1200px){
    width: 1080px;
  } 
`

export const Home = () => {

  const spotifyList = data.albums.items
  console.log(spotifyList) 
  return (
    <div>
    <Header />
  <Grid>

  {spotifyList.map((item)=>{
    return( <AlbumCard object={item} />)
   
  })}
  </Grid> 
  </div> 
    )
}

  {/* <div className="header"><p>New albums and singles</p></div>
  

{albumNew.map((album) =>  {
        return <Album key={album.name} image={album.image} linkAlbum= {album.linkAlbum} name={album.name} 
        artist1={album.artist1} link1={album.link1} artist2={album.artist2} link2={album.link2} 
        artist3={album.artist3} link3={album.link3} />
      })}

</div> */}