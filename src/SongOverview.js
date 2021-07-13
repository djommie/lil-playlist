import React, { Component } from 'react'
import SongAdd from './components/SongAdd'
import SongDisplay from './components/SongDisplay'
import NavBar from './components/NavBar'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class SongOverview extends Component {

  constructor() {
    super()
    this.state =
    {
      songs: [
        {
          title: 'Dust in the wind',
          artist: 'Kansas',
          genre: 'Country',
          rating: 5
        },
        {
          title: 'FreeBird',
          artist: 'Lynyrd Skynyrd',
          genre: 'Rock',
          rating: 4
        },
        {
          title: 'Kaboomba',
          artist: 'DJ boomba',
          genre: 'House',
          rating: 2
        }
      ]
    }

    this.addSong = this.addSong.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
    this.sortTitle = this.sortTitle.bind(this)
    this.sortArtist = this.sortArtist.bind(this)
    this.sortRating = this.sortRating.bind(this)

  }

  addSong(event) {
    event.preventDefault()
    const title = document.getElementById('title-input').value
    const artist = document.getElementById('artist-input').value
    const genre = document.getElementById('genre-input').value
    const rating = document.getElementById('rating-input').value
    this.setState(prevState => {
      const updatedSongs = prevState.songs.concat({ title: title, artist: artist, genre: genre, rating: rating })
      return {
        songs: updatedSongs
      }
    })
  }

  deleteSong(title) {
    this.setState(prevState => {
      let updatedSongs = prevState.songs.filter(song => song.title !== title)
      return {
        songs: updatedSongs
      }
    })
  }

  sortTitle() {
    this.setState(prevState => {
      let updatedSongs = prevState.songs.sort((a, b) => {
        let titleA = a.title.toUpperCase()
        let titleB = b.title.toUpperCase()
        if (titleA > titleB) {
          return 1
        }
        if (titleA < titleB) {
          return -1
        }
        return 0
      })
      return {
        songs: updatedSongs
      }
    })
  }

  sortArtist() {
    this.setState(prevState => {
      let updatedSongs = prevState.songs.sort((a, b) => {
        let artistA = a.artist.toUpperCase()
        let artistB = b.artist.toUpperCase()
        if (artistA > artistB) {
          return 1
        }
        if (artistA < artistB) {
          return -1
        }
        return 0
      })
      return {
        songs: updatedSongs
      }
    })
  }

  sortRating() {
    this.setState(prevState => {
      let updatedSongs = prevState.songs.sort((a, b) => {
        return a.rating - b.rating
      })
      return {
        songs: updatedSongs
      }
    })
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <NavBar />
          <Route path='/about' component={About} />
          <Route exact path='/' render={props => {
            return (
              <div>
                <SongAdd addSong={this.addSong} />
                <SongDisplay songs={this.state.songs} deleteSong={this.deleteSong} />
              </div>
            )
          }}
          />
        </div>
      </Router>
    );
  }
}

export default SongOverview;