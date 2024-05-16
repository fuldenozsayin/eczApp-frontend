import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NaviComponent } from "./components/navi/navi.component";
import { ProductComponent } from "./components/product/product.component";
import { CategoryComponent } from "./components/category/category.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, CommonModule, NaviComponent, ProductComponent, CategoryComponent,HttpClientModule]
})
export class AppComponent {
  title: string = 'eczApp';
  user: string = 'Fulden ÖZSAYIN';
  
}
