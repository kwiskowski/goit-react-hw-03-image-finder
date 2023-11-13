import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar>
          <Loader></Loader>
        </SearchBar>
        <ImageGallery>
          <ImageGalleryItem>
            <Modal></Modal>
          </ImageGalleryItem>
        </ImageGallery>
        <Button></Button>
      </div>
    );
  }
}
