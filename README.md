# Spotify ReactJS

Disponível para teste: [Aplicação-Teste](https://spotifyplayer-reactjs.herokuapp.com/)

Código-Fonte: [Github](https://github.com/marcuspaulo/spotify-reactjs)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Main Screen](/images/Main-Screen.png)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---

# Criar o projeto

```sh
$ npx create-react-app my-app
$ cd my-app
$ npm start
```

# Instalar o Styled-Components

```sh
$ yarn add styled-components
```

# Baixando a fonte Montserrat:

link: https://fonts.google.com/?query=montse&selection.family=Montserrat

Clique na fonte e depois em Customized:

- Light 300
- Regular 400
- Bold 700

Vá no public > index.html > copiar esse conteúdo:

 <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap" rel="stylesheet">

O arquivo ficará assim:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap"
      rel="stylesheet"
    />

    <title>Spotify ReactJS</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

## No arquivo do Styles-Components - global.js

```css
font-family: "Montserrat", sans-serif;
```

# Instalando a Biblioteca RC-Slider

```bash
$ yarn add rc-slider
```

# Instalando o React-Router-Dom

```bash
$ yarn add react-router-dom
```

# Instalando o Reacttron-Reactjs

```bash
$ yarn add reactotron-react-js reactotron-redux reactotron-redux-saga
```

# Instalando o Redux React-Redux e Redux-Saga

```bash
$ yarn add redux react-redux redux-saga
```

## Inicio da configuração do Redux, Saga

### Criar a seguinte estrutura de diretório

#### src > store

#### > ducks > index.js

#### > sagas > index.js

# Configuração do index.js (Dentro da pasta store)

```js
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware()
  )
);

sagaMiddleware.run(sagas);

export default store;
```

# No App.js, adicione os seguintes imports:

## import { Provider } from "react-redux";

## import store from "./store";

### adicione o elemento Provider em volta dos componentes, então, se um dia quiser conseguir a Rota pelo Redux.

---

# No arquivo index.js do Ducks

```js
import { combineReducers } from "redux";

export default combineReducers({
  example: () => []
});
```

# Implementando o index.js do Saga

```js
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([]);
}
```

# Implementando o primeiro Reducers:

## Arquivo index.js (pasta: Ducks)

```js
import { combineReducers } from "redux";

import playlists from "./playlist";

export default combineReducers({
  playlists
});
```

## Em seguida, crie o Reducer playlist.js

```js
export const Types = {
  GET_REQUEST: "playlist/GET_REQUEST",
  GET_SUCCESS: "playlist/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
```

---

# Instalando o JSON-Server

```bash
$ yarn global add json-server
```

# Executando o JSON-Server

### O arquivo server.json está dentro da raiz do projeto

### -w: watch - ele atualiza, sem precisar subir novamente o servidor

### -d: Delay na requisição

```bash
$ json-server server.json -p 3001 -w -d 500
```

# Instalando o Axios

```bash
$ yarn add axios
```

## Em seguida, crie o arquivo API.JS

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export default api;
```

# Próximo passo, será a criação do saga Playlists

```js
import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlaylistActions.getPlaylistSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
```

# Ajustar o arquivo index.js (da pasta sagas)

```js
import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistsTypes } from "../ducks/playlists";

import { getPlaylists } from "./playlists";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
}
```

# Ajustando o Sidebar para chamar o Redux e a API

```js
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="#">Navegar</a>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>

            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados Recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Álbuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcast</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLIST</span>
            </li>
            <li>
              <a href="#">Melhores do Rock</a>
            </li>
            <li>
              <a href="">Melhores da MPB</a>
            </li>
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch); // transforma função em uma propriedade do Sidebar

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
```

# Implementação do SideBar com o Redux, chamando a API

```js
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="#">Navegar</a>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>

            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados Recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Álbuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcast</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLIST</span>
            </li>

            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch); // transforma função em uma propriedade do Sidebar

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
```

# Instalando a dependência do PropTypes

```bash
$ yarn add prop-types
```

# Implementando o PropTypes:

```js

class Sidebar extends Component {

  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      })),
    }).isRequired
  }
```

# Implementação do SideBar, que vira um componente, além da utilização do Redux

```js
import React, { Component } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, Title, List, Playlist } from "./styles";

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string
        })
      )
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch); // transforma função em uma propriedade do Sidebar

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
```

# A implementação até o momento:

![SideBar](/images/Screen-After-Redux-SideBar.png)

# Implementação do ErrorBox (Componente de Mensagem de Error)

![Mensagem de Erro](/images/Screen-ErrorBox-LoadingPlaylist.png)

---

#Implementação para reproduzir a música:

```bash
$ yarn add react-sound
```

# Criando o Duck do Player

```js
import Sound from "react-sound";

export const Types = {
  LOAD: "player/LOAD"
};

const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        status: Sound.status.PLAYING
      };
    default:
      return state;
  }
}

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song }
  })
};
```
