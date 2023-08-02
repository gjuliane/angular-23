import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  details = '';
  message = '';
  sending = false;

  url = 'http://localhost:61614/';
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private routerOutlet: RouterOutlet
  ) {}

  ngOnInit() {
    console.log("routerOutlet:", this.routerOutlet);
  }
  
  sanitizeURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
