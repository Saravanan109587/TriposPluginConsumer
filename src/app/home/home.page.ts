import { Component } from '@angular/core';
import { TriPosProviderService } from '../tri-pos-provider.service';
declare var tripos:any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(){}

  callTriPos=()=>{
    var success = function(message) {
      alert(message);
  }

  var failure = function() {
      alert("Error calling Hello Plugin");
  }

  tripos.greet("KMIt world", success, failure);
  }


  
}
