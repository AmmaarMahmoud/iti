import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  @Input() Fcolor:string=""
  @Input() Lcolor:string=""
  constructor(private Ref:ElementRef){
  }
  ngOnChanges(): void {
    this.Ref.nativeElement.style.border=`2px solid ${this.Lcolor}`
  }
  @HostListener ('mouseover') FirstColor(){
    this.Ref.nativeElement.style.border=`2px solid ${this.Fcolor}`
  }
  @HostListener ('mouseout') LastColor(){
    this.Ref.nativeElement.style.border=`2px solid ${this.Lcolor}`
  }
}




























// ngOnChanges(): void {
  //   this.eleref.nativeElement.style.border=`2px solid red`
  // }
  
  // @HostListener('mouseover') onMouseHover(){
  //   this.eleref.nativeElement.style.border= `2px solid ${this.defcolor}`
  // }
  // @HostListener ('mouseout') onMouseout(){
  //   this.eleref.nativeElement.style.border=`2px solid ${this.lastcolor}`
  // }