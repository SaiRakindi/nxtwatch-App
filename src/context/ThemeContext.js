import React from 'react'

const ThemeContext = React.createContext({
  onToggleThemeButton: () => {},
  darkTheme: false,

  onClickSaveButton: () => {},
  savedItems: [],

  onClickLikeButton: () => {},
  likedVideos: [],

  onClickDislikeButton: () => {},
  dislikedVideos: [],
})

export default ThemeContext
