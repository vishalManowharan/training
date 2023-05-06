import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestmodComponent } from './testmod.component';



@NgModule({
  declarations: [
    TestmodComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TestmodComponent]
})
export class TestmodModule { }
