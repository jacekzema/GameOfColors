import { Component, OnInit } from '@angular/core';
import { Box } from '../models/box';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  boxes: Array<Box> = [];
  varToHelp: number = 0;
  counterOfCheck: number = 0;
  constructor() {
    console.log('Konstruktor Playgrounda');
    for(let i=0; i<16; i+=2)
    {

      let randColor = '#'+Math.floor(Math.random()*4095).toString(16);
      console.log(randColor.length);

      if (randColor.length == 3)
      {
        randColor= randColor + '0';
      }

      let box:Box = ({
        name: 'Box' +i,
        color: randColor,
        isClicked: false,
        isDistabled: false
      });
      let box1:Box = ({
        name: 'Box' +(i+1),
        color: randColor,
        isClicked: false,
        isDistabled: false
      });
      this.boxes.push(box);
      this.boxes.push(box1);
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

  onClick(box: Box){
    box.isClicked=true;
    this.varToHelp++;
    console.log(this.varToHelp);

    if (this.varToHelp == 2)
    {
      let pos, pos1=0;
      console.log('jestem w IF');
      pos = this.boxes.map( e=> { return e.isClicked; }).indexOf(true);
      console.log(pos + 'Z MAPY');
      pos1 = this.boxes.map( e=> { return e.isClicked; }).indexOf(true,pos+1);
      console.log(pos1 + 'Z MAPY ALE 2');
      // let boxesTemp = this.boxes;
      // let found = boxesTemp.findIndex( i=> i.isClicked === true);
      // console.log(found);
      // boxesTemp[found].isClicked = false;
      // let found1 = boxesTemp.findIndex( i=> i.isClicked === true);
      // console.log(found1);
      this.varToHelp = 0;
      this.checkChoise(this.boxes[pos],this.boxes[pos1]);
    }
  }

  checkChoise(box: Box, box1:Box){
    this.counterOfCheck ++;

    if(box.color == box1.color){
      box.isDistabled= true;
      box1.isDistabled= true;
      box.isClicked= false;
      box1.isClicked= false;
    }
    else
    {
      setTimeout(() =>{
        box.isClicked= false;
        box1.isClicked= false;},
        500);

    }

  }

  onHover(box: Box){
  }

}
