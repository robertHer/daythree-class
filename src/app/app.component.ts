import { Component, OnInit } from '@angular/core';

class Point{
  x:number;
  y:number;

  constructor(x:number , y:number){
  this.x = y;
  this.y = x;
  
}
add(point:Point){
  return new Point (this.x + point.x , this.y + point.y);
}

}


class Point3D extends Point{
  z:number;
  
  constructor(x:number , y:number, z:number){
super(x,y);
this.z = z;
}
  add(new3DPoint : Point3D){
    return new Point3D (this.x + new3DPoint.x , this.y + new3DPoint.y ,this.z + new3DPoint.z );
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit(){
  
    this.classPointTest();
    this.extendPointTest();

  }




classPointTest(){
  var p1 =  new Point (10,3);
  var p2 = new Point (5,5);
 var p3 = p1.add(p2);

 console.log(p3);
}

extendPointTest(){
  const p3d1 = new Point3D (4,5,3);
  const p3d2 = new Point3D (5,7,2);
  const p3d3 =  p3d1.add(p3d2);

  console.log(p3d3);
}




