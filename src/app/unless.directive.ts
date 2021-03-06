import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  @Input() set unless(condition: boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }

  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

   }

}
