import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {
  photoUrl: string;

  constructor(private photosService: PhotosService) {
    this.drawPhoto();
  }

  onClick() {
    this.drawPhoto();
  }

  drawPhoto() {
    this.photosService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
  }

  ngOnInit() {}
}