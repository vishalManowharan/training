import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.scss', '../app.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ManualComponent  implements OnInit {
    testVar: string = '';
    @Input()testInput: string= '';
    @Output()testOutput = new EventEmitter<string>();
    constructor() {
        
    }
    ngOnInit(): void {
        this.testOutput.emit('outputworking')
      }
    
}