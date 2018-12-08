import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }
  public onLogin() {
    setTimeout( () => {
      this.presentAlertError();
    }, 1000);
  }
  public async presentAlertError() {
    const alert = await this.alertController.create({
        header: 'Error Logging In',
        message: 'Your email or password is incorrect. You can reset your credentials on the Nao platform if you forgot them.',
        buttons: [
            {
                text: 'OK',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirm Cancel');
                }
            }
        ]
    });

    await alert.present();
}

}



