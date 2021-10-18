import { Component, ElementRef, OnInit, ViewChild, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
@Injectable()
export class NavbarComponent implements OnInit {

  @ViewChild('sidebar') sidebar! :ElementRef;

  isOpen: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platform)) {
      window.addEventListener('click', (e: any) => {
        if(this.isOpen) {
          if (this.document.getElementById('sidebar')!.contains(e.target)) {
          } else {
            this.sidebar.nativeElement.classList.remove('open-sidebar')
            this.isOpen = !this.isOpen;
            scrollY = scrollY + 1;
          }
        }
      })
    }
  }


  // mostrar sidebar en la vista

  toggleSidebar(): void {
    setTimeout(() => {
      if (!this.isOpen) {
        this.sidebar.nativeElement.classList.add('open-sidebar')
        this.isOpen = !this.isOpen;
      } else {
        this.sidebar.nativeElement.classList.remove('open-sidebar')
        this.isOpen = !this.isOpen;
      }
    }, 100);
  }

}

