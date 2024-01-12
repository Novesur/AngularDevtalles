import { Component, Input , EventEmitter,Output, OnInit} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit{


  private debouncer= new Subject<string>()
  @Input()
  public placeholder:string='';

  @Output()
  public onValue= new EventEmitter<string>();

  @Output()
  public onDebounce new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(1000))
    .subscribe(value=>{

this.onDebounce.emit(onDebounce)    })
  }

emitValue(value:string):void{
  this.onValue.emit(value)
}

onKeyPress(searchTerm:string){
this.debouncer.next(searchTerm)
}
}
