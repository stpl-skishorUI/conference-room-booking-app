import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  checkHeaderFooterVisibility: string[] = ['/login'];
  //===========================================================Centralized API URLs=========================================================
  private apiUrls: any = {
    baseUrl: 'https://demogramsuvidhaapi.erpguru.in/',
    // otp:'https://mahamahasul-api.mahamining.com/',
  };

}
