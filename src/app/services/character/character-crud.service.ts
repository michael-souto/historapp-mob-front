import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { HistoricalDate } from '../../models/historical-date.model';
import { CrudService } from '../pattern/crud-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterCrudService extends CrudService<Character> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  setBirthDate(character?: Character, date?: HistoricalDate) {
    return this.http.put<any>(`${this.getAdressAPI()}/${character?.id}/birth-date`, date);
  }

  deleteBirthDate(character?: Character, date?: HistoricalDate) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${character?.id}/birth-date`);
  }


  setDeathhDate(character?: Character, date?: HistoricalDate) {
    return this.http.put<any>(`${this.getAdressAPI()}/${character?.id}/death-date`, date);
  }

  deleteDeathDate(character?: Character, date?: HistoricalDate) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${character?.id}/death-date`);
  }

  setMother(character?: Character, mother?: Character) {
    return this.http.put<any>(`${this.getAdressAPI()}/${character?.id}/mother/${mother?.id}`, {});
  }

  deleteMother(character?: Character) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${character?.id}/mother`);
  }
  setFather(character?: Character, father?: Character) {
    return this.http.put<any>(`${this.getAdressAPI()}/${character?.id}/father/${father?.id}`, {});
  }

  deleteFather(character?: Character) {
    return this.http.delete<any>(`${this.getAdressAPI()}/${character?.id}/father`);
  }

  findAllCharacters() {
    return this.http.get<any>(`${this.getAdressAPI()}/all`);
  }

  getAdressAPI(): string {
    return environment.apiURLGateway + '/character/character';
    return "http://192.168.1.13:9200/character";
  }
  getNewClass(): Character {
    let entity = new Character();
    entity.sex = 'M';
    return entity;
  }
}
