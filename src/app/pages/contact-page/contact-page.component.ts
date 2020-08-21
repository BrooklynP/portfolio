import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SecretService } from '../../../app/secrets/secret.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  public emailSender = '';
  public emailContent = '';
  public response = '';
  private toastStatus = 'leave';

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private secrets: SecretService) {
    this.headers.append("Access-Control-Allow-Origin", "*");
  }

  ngOnInit() {
  }

  private setToast(message: string) {
    this.toastStatus = 'enter';
    setTimeout(() => {
      this.toastStatus = 'leave';
    }, 2700);
    this.response = message;
    setTimeout(() => {
      this.response = '';
    }, 3000);
  }

  getToastStatus(): string {
    return this.toastStatus;
  }

  sendEmail() {
    this.http.post(this.secrets.emailAPIEndpoint,
      {
        subject: `Portfolio Email Sent From ${this.emailSender}`,
        body: `Email Content: ${this.emailContent}`
      }, { headers: this.headers }).toPromise().then((response: any) => {
        this.emailSender = '';
        this.emailContent = '';
        if (response.data.statusCode === 200) {
          this.setToast('Message Sent!');
        }
        console.log(response);
      }).catch((err) => {
        this.setToast('Error sending  message');
        console.error(err);
      });
  }

}
