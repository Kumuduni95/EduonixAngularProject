import { Injectable } from '@angular/core';
import { Album } from '../album';
import { ALBUM } from '../data/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albums: Album[] = ALBUM;
  constructor() { }

  getAlbumById(id: number): Album | undefined {
    console.log("id",id)
    
    return this.albums.find((u) => u.id === id);
    
  }
}
