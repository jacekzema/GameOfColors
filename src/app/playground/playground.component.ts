import { Component, OnInit } from '@angular/core';
import { Box } from '../models/box';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  boxes: Array<Box> = [];

  constructor() {
    console.log('Konstruktor Playgrounda');
    for(let i=0; i<8;i++)
    {
      let randColor = '#'+Math.floor(Math.random()*4095).toString(16);
      let box:Box = ({
        name: 'Box' +i,
        color: randColor,
        isClicked: false
      });
      this.boxes.push(box);
      this.boxes.push(box);
    }
    this.shuffle(this.boxes);
  }

  ngOnInit() {
  console.log('Tutaj jest INIT Playgrounda');
  }

    shuffle(array: Array<Box>) {                                               //randomize function from stack
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}
