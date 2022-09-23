import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent{
  title: string = "Whatever you want";
  content: string = "Some content goes here";
  isTechRelated: boolean = true;
  techRelatedMockText: string = "Tech Related";

  getColor(){
    return this.isTechRelated === true ? 'blue' : 'yellow'
  }

  toggleIsTechRelated(){ //Bonus #1 tS
     this.isTechRelated === true ? this.isTechRelated = false : this.isTechRelated = true;
  }

}
