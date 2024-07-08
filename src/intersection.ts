interface Drivable {
  drive():void;
}
interface Flyable{
  fly():void;
}
type Vehicle = Drivable & Flyable;

let carPlane: Vehicle = {
  drive:()=>console.log("Driving"),
  fly: ()=> console.log("Flying")
};