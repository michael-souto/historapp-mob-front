import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
    selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {

    @Input('header') header: any;
    @Input('footer') footer: any;

    private lastY = 0;

    constructor(
        private renderer: Renderer2,
        private domCtrl: DomController
    ) { }


    ngOnInit(): void {
      this.header = this.header.el;
      this.footer = this.footer.el;
      this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 100ms');
            this.renderer.setStyle(this.footer, 'transition', 'margin-bottom 100ms');

        });
    }

    @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
        if (
            $event.detail.scrollTop > (70) &&
            $event.detail.scrollTop > this.lastY &&
            $event.detail.deltaY > 50
        ) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${ this.header.clientHeight }px`);
                this.renderer.setStyle(this.footer, 'margin-bottom', `-${ this.footer.clientHeight }px`);
            });
        }
        else if ($event.detail.scrollTop < 100 || $event.detail.deltaY < -50){
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
                this.renderer.setStyle(this.footer, 'margin-bottom', '0');
            });
        }
        this.lastY = $event.detail.scrollTop;

    }

}
