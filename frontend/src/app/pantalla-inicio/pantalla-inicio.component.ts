import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css']
})
export class PantallaInicioComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
    var enlaces:string[] = ["https://www.youtube.com/embed/cD3qVfDpO4Q","https://www.youtube.com/embed/34SQ4GcS7Ww"]
    var contador:number = 0, sizeEnlaces = enlaces.length -1;
    var iframe:any = document.getElementById("video") as HTMLIFrameElement;
    var link1:Element = document.getElementById("video1") as HTMLElement;
    var link2:Element = document.getElementById("video2") as HTMLElement;
    iframe.src = enlaces[contador];
    link1.addEventListener("click", (Event)=>{ 
      if(contador == 1){
        contador--;
        iframe.src = enlaces[contador];
      }
    }, false);
    link2.addEventListener("click", (Event)=>{ 
    if(contador == 0){
      contador++;
      iframe.src = enlaces[contador];
    }
    }); 
  }
}

