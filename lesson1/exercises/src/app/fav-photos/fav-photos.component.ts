import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photo';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.sketchappsources.com/resources/source-image/python-logo.png';
  image3 = 'https://www.ownatshirtstore.com/wp-content/uploads/2019/03/ah-the-element-of-surprise-heat-transfer-on-a-black-tshirt.jpg';
  constructor() { }

  ngOnInit() {
  }
}