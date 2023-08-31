import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tag-editor',
  templateUrl: './tag-editor.component.html',
  styleUrls: ['./tag-editor.component.scss'],
})
export class TagEditorComponent implements OnInit {

  constructor(
    private alertController: AlertController) { }

  @Input() tags?: string[]= [];
  @Output() onAddTag = new EventEmitter<any>();
  @Output() onRemoveTag = new EventEmitter<any>();

  ngOnInit() {}

  async presentNewTag() {
    let oKClicked = false;

    const alert = await this.alertController.create({
      header: 'TAG de de busca',
      inputs: [
        {
          placeholder: '#suatag',
          name: 'tag',
          attributes: {
            maxlength: 20,
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            oKClicked = true;
          },
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      if (oKClicked) {
        this.addTag(data.data.values.tag);
      }
    });
  }

  addTag(tag: string) {
    if (tag != null && tag != '') {
      if (tag[0]=='#') {
        this.tags?.push(tag);
      } else {
        this.tags?.push('#' + tag);
      }
    }
    this.onAddTag.emit(tag);
  }

  removeItem(i: number) {
    this.tags?.splice(i, 1);
    this.onRemoveTag.emit(this.tags);
  }
}
