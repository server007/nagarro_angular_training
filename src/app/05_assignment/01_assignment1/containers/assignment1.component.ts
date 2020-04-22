import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  print_data=""
  show(text_input:HTMLInputElement){
    this.print_data=text_input.value
};


}
