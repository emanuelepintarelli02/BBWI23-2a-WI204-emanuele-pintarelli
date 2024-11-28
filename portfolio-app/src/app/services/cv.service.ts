import { Injectable } from '@angular/core';
import { CV } from '../models/cv';

@Injectable({
 providedIn: 'root'
})
export class CVService {

 constructor() { }

 getCVs(): CV[] {
 return [
 new CV('Swisscom (Schweiz) AG', 2018, 2023),
 new CV('Dynasoft', 2023, 2024),
 ]
 }
}