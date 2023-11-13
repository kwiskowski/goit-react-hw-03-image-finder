import { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
