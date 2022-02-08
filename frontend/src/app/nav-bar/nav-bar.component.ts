import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/persona';
import { SessionstorageService } from '../sessionstorage.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedin:boolean;
  public sesion:Persona;
  
  constructor(private _sessionstorage:SessionstorageService) {
    this.loggedin = this._sessionstorage.haySesion_sessionstorage();
    this.sesion = this._sessionstorage.obtenerSesion_sessionstorage();
  }

  ngOnInit(): void {
    const searchButton: any = document.querySelector("nav .desktop-nav .link-search");
    const closeButton: any = document.querySelector(".search-container .link-close");
    const desktopNav: any = document.querySelector(".desktop-nav");
    const searchContainer: any = document.querySelector(".search-container");
    const overlay: any = document.querySelector(".overlay");

    searchButton.addEventListener("click", () => {
        desktopNav.classList.add("hide");
        searchContainer.classList.remove("hide");
        overlay.classList.add("show");
    })

    closeButton.addEventListener("click", () => {
        desktopNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        overlay.classList.remove("show");
    })

    overlay.addEventListener("click", () => {
        desktopNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        overlay.classList.remove("show");
    })


    // Mobile Version

    const menuIconContainer: any = document.querySelector("nav .menu-icon-container");
    const navContainer: any = document.querySelector(".nav-container");

    menuIconContainer.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    })


    const searchBar: any = document.querySelector(".mobile-search-container .search-bar");
    const nav: any = document.querySelector(".nav-container nav");
    const searchInput: any = document.querySelector(".mobile-search-container input");
    const cancelBtn: any = document.querySelector(".mobile-search-container .cancel-btn");

    searchInput.addEventListener("click", () => {
        searchBar.classList.add("active");
        nav.classList.add("move-up");
        desktopNav.classList.add("move-down");
    })

    cancelBtn.addEventListener("click", () => {
        searchBar.classList.remove("active");
        nav.classList.remove("move-up");
        desktopNav.classList.remove("move-down");
    })

  }

}
