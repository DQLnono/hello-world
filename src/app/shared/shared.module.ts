import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  declarations: [],
  exports: [
  	RouterModule,
  	FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
