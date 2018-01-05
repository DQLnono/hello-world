import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SiderComponent]
})
export class LayoutModule { }
