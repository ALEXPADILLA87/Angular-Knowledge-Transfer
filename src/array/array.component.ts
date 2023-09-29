import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoppingCart } from './models/shopping-cart';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {

  shoppingForm: FormGroup;
  constructor(private fb: FormBuilder){

  }

  public setupForm(){
    form = this.fb.group({
      ... other form controls ...
      lessons: this.fb.array([])
  });

  }
}