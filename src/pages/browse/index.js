import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Michaeljacksondangerous.jpg/220px-Michaeljacksondangerous.jpg"
          alt="Playlist"
        />
        <strong>Pop dos Bons</strong>
        <p>As melhores do POP Mundial</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Michaeljacksondangerous.jpg/220px-Michaeljacksondangerous.jpg"
          alt="Playlist"
        />
        <strong>Pop dos Bons</strong>
        <p>As melhores do POP Mundial</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Michaeljacksondangerous.jpg/220px-Michaeljacksondangerous.jpg"
          alt="Playlist"
        />
        <strong>Pop dos Bons</strong>
        <p>As melhores do POP Mundial</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Michaeljacksondangerous.jpg/220px-Michaeljacksondangerous.jpg"
          alt="Playlist"
        />
        <strong>Pop dos Bons</strong>
        <p>As melhores do POP Mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
