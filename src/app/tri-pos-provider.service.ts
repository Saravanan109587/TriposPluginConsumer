import { Injectable } from '@angular/core';
import {Cordova,Plugin,IonicNativePlugin} from '@ionic-native/core';


 
@Injectable({
  providedIn: 'root'
})
export class TriPosProviderService  extends IonicNativePlugin{
  greet=(args:any):Promise<any>=>{
   return ;
  }
 
}
