import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlbumsService } from '../albums/albums.service';
import { Album, Photo } from '../album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album : Album = {
    id: 0, title: '',
    userId: 0
  }
   photo : any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService 
    ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe((params:Params)=>{ 
      this.album = this.albumsService.getAlbumById(+params['get']('id')) || {
        userId: 0,
        id : 0,
        title : '',
      }
    })   
    this.fetchPhotos(); 
    
    
  }

  fetchPhotos(){
   console.log("ALBUM ID : ",this.album.id)
   fetch('https://jsonplaceholder.typicode.com/albums/'+this.album.id+'/photos')
   .then(res =>res.json())
   .then(res=>{  
    this.photo = res
    
    console.log("Photos : ",this.photo)
   }) 
   
  }
  

}
