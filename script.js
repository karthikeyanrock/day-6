class Movie{
    constructor(title,production,rating){
        this.title = title;
        this.studio = production ;
        this.rating = rating;
    }
    getPG(){
    return this.rating;
}
}  
var film = new Movie("thewarrior","master Production","u/a");
console.log(film.getPG());


//nd Q circle##########
class Circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
  getRadius(){
    return this.color;
  }
}
var round = new Circle("double","blue");
console.log(round.getRadius());

//class to hold all the details#########

class Person{
constructor(name,age,height){
  this.name=name;
  this.age=age;
  this.height=height;
}
getQualification(){
  return this.height;
}
}
var identity=new Person("kavi","24","176");
console.log(identity.getQualification());


 //write a class to calculate the uber price.######
class Uber{
  construtor(price,km){
    this.price=price;
    this.km=km;
  }
  uber(){
  return this.price*this.km;
  }
}
var result=(10,1);
console.log();