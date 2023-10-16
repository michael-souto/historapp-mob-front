import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostListener } from "@angular/core";
import { ActionSheetButton, ActionSheetController, ActionSheetOptions, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router,
    protected activateRoute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private toastController: ToastController) {
    this.loadScreenSize();
  }

  SCREEN_HEIGHT?: number;
  SCREEN_WIDTH?: number;
  NUMBER_OF_RECORDS = 8;
  COLOR_COMMENT? = "#fff72b";

  @HostListener('window:resize', ['$event'])
  loadScreenSize() {
    this.SCREEN_HEIGHT = window.innerHeight;
    this.SCREEN_WIDTH = window.innerWidth;
    this.NUMBER_OF_RECORDS = Math.round(this.SCREEN_HEIGHT / 50);
  }

  getArrayTags(tags?: string) {
    let array = tags?.split(';');
    array?.pop();
    return array;
  }

  removeTagsHTML(html:any) {
    return html.replace(/<[^>]*>/g, "");
  }

  getDefautRouteAbove(){
    return this.router.url.substring(0, this.router.url.lastIndexOf('/'));
  }

  async presentToast(message: string, isError: boolean) {
    await this.presentDialog({header: message}, isError);
  }

  async presentDialog(dialog: Dialog, isError: boolean) {
    const toast = await this.toastController.create({
      message: dialog.header,
      duration: 1000,
      color: isError ? 'danger' : 'success',
      icon: isError ? 'close-circle' : 'checkmark-circle',
      buttons: [
         {
           text: 'Ok',
           role: 'cancel',
           handler: () => {},
         },
      ],
    });

    await toast.present();
  }

  async presentActionSheet(dialog: Dialog) {
    let btns:ActionSheetButton[] = [];
    dialog.buttons?.forEach(x=> {
      btns.push({text: x.text, handler: x.handler, data: !x.handler ? {action: 'cancel'} : null});
    });
    const actionSheet = await this.actionSheetCtrl.create({
      header: dialog.header,
      buttons: btns,
    });
    await actionSheet.present();
  }

  setNullInNewIds(newsIds: number[], list: any[]) {
    for (let i = 0; i < newsIds?.length; i++) {
      const newId = newsIds[i];
      for (let j = 0; j < list?.length; j++) {
        const entity = list[j];
        if (entity.id != null && entity.id == newId) {
          entity.id = null;
        }
      }
    }
  }

  reloadIds(ids: number[], list: any[]) {
    for (let index = 0; index < ids?.length; index++) {
      const elementId = ids[index];
      for (let j = 0; j < list?.length; j++) {
        const entity = list[j];
        if (entity.id == null) {
          entity.id = elementId;
          break;
        }
      }
    }
  }

  addItemListGrid(entityEdit: any, list: any[], newsIds: number[]) {
    if (entityEdit?.id == null) {
      let maxId: number = 0;
      if (list?.length > 0) {
        for (let i = 0; i < list?.length; i++) {
          if (list[i].id > maxId) {
            maxId = list[i].id;
          }
        }
      }
      maxId++;
      entityEdit.id = maxId;
      newsIds?.push(maxId);
    } else {
      for (let i = 0; i < list?.length; i++) {
        if (list[i].id == entityEdit?.id) {
          list?.splice(i, 1);
        }
      }
    }
    list?.push(entityEdit);
  }

  removeItemListGrid(entityEdit: any, list: any[], newsIds: number[]) {
    for (let i = 0; i < newsIds?.length; i++) {
      if (newsIds[i] == entityEdit?.id) {
        newsIds?.splice(i, 1);
      }
    }

    for (let i = 0; i < list?.length; i++) {
      if (list[i].id == entityEdit?.id) {
        list?.splice(i, 1);
      }
    }
  }

  backMyBaseRoute() {
    this.router.navigate([this.getDefautRouteAbove()]);
  }
}

export class Dialog {
  constructor(header?: string, buttons?: ButtonDialog[]) {
    header = header;
    buttons = buttons;
  }
  header?: string;
  buttons?: ButtonDialog[];
}

export class ButtonDialog {
  text?:string;
  handler?: () => boolean | void | Promise<boolean | void>;
}
