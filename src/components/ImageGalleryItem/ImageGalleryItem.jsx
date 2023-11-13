import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img className={css.galleryImage} src="" alt="" />
      </li>
    );
  }
}
