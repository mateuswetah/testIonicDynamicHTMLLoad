import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content = `
  <article>
    <h1>Awesome Document</h1>
    <div>
      <p>bla bla bla</p>
      <my-dynamic msg="OLÁ!"></my-dynamic>
    </div>
  </article>
  `;

  constructor(public navCtrl: NavController) {

  }

  trocarConteudo() {
      this.content = `
        <article>
          <h1>Awesome Document</h1>
          <div>
            <p>bla bla bla</p>
            <my-dynamic msg="TCHAU!"></my-dynamic>
          </div>
        </article>
        `;
  }
}
