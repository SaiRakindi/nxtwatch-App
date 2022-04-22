import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'
import './App.css'

class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
    likedVideosIds: [],
    dislikedVideosIds: [],
  }

  onClickToggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  onClickSaveButton = videoDetails => {
    const {id} = videoDetails
    const {savedVideos} = this.state
    const savedVideoExists =
      savedVideos.find(savedVideo => savedVideo.id === id) !== undefined
    if (savedVideoExists) {
      this.setState(previousState => ({
        savedVideos: previousState.savedVideos.filter(
          savedVideo => savedVideo.id !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        savedVideos: [...previousState.savedVideos, videoDetails],
      }))
    }
  }

  onClickLikeButton = id => {
    const {likedVideosIds} = this.state
    const likedVideoIdExists = likedVideosIds.includes(id)
    if (likedVideoIdExists) {
      this.setState(previousState => ({
        likedVideosIds: previousState.likedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        likedVideosIds: [...previousState.likedVideosIds, id],
        dislikedVideosIds: previousState.dislikedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    }
  }

  onClickDislikeButton = id => {
    const {dislikedVideosIds} = this.state
    const dislikedVideoIdExists = dislikedVideosIds.includes(id)
    if (dislikedVideoIdExists) {
      this.setState(previousState => ({
        dislikedVideosIds: previousState.dislikedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        dislikedVideosIds: [...previousState.dislikedVideosIds, id],
        likedVideosIds: previousState.likedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    }
  }

  render() {
    const {
      darkTheme,
      savedVideos,
      likedVideosIds,
      dislikedVideosIds,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onToggleThemeButton: this.onClickToggleTheme,

          savedVideos,
          onClickSaveButton: this.onClickSaveButton,

          likedVideosIds,
          onClickLikeButton: this.onClickLikeButton,

          dislikedVideosIds,
          onClickDislikeButton: this.onClickDislikeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
