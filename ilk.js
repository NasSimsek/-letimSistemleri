"use strict";
/*var b: string = "  Hello Every Body         ";
let c = "Hello World";
let a: number = 255;
let s: boolean = true;
if (s) {
  console.log(c, a);
  console.warn(b);
  console.log("Ahmet");
  console.log(c, a);
  console.warn(b);
  console.log("Ahmet");
}*/
/*let a:string ="nasos";
let b:string="kelim";
let c :string ;
c=" Kelim and Nas are what a beautiful gang";
let d:number =1;
let f:boolean=true;
let dizi:string[]=["red","yellow","blue","green"];
let sayılar:Array<number>;
sayılar=[1,2,3,4,5];
if (8<10){
  console.log(a,b);
  document.write(c);
  alert(f);
  console.log(d);
  alert(dizi);
  console.log(dizi[2]);
  console.log(sayılar);
}*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*
 abstract class Hesap{

 urunad:string;
 barkod:number;

 abstract fiyat();

 abstract zaman();

}


class tablet extends Hesap{
  fiyat() {
    console.log("urununuzun fiyatı 5000 dolar");
  }
  
  zaman() {
    console.log ("zamanı 25 yıl");
  }
}


class tv extends Hesap{
  fiyat() {
   console.log("urunun fiyatı 250000 euro ");
 }
 zaman() {
    console.log ("urunun zamanı 50 yıldır");
  }



}

let tablet1=new tablet();
tablet1.urunad="sonic";
tablet1.barkod=50;
console.log("urununuzun adi:"+tablet1.urunad+ "urününüzün barkodu:"+tablet1.barkod);
tablet1.fiyat();
tablet1.zaman();

console.log("***********************");


let tvi=new tv();
tvi.urunad="samsung";
tvi.barkod=24;
console.log("urununuzun adi:"+tvi.urunad+ "urününüzün barkodu:"+tvi.barkod);
tvi.fiyat();
tvi.zaman();
*/
var person = /** @class */ (function () {
    function person(name, id, phone) {
        this.name = name;
        this.id = id;
        this.phone = phone;
        console.log("kişi oluşturuldu");
    }
    person.prototype.calculage = function (sayı) {
        this.age = 2019 - sayı;
        return this.age;
    };
    person.prototype.showınfo = function () {
        console.log("adı: " + this.name, "yaşı: " + this.id, "cepno: " + this.phone, "yaşı: " + this.age);
    };
    return person;
}());
exports.person = person;
var per1 = new person("Kelim", 1, [1, 5, 2, 4, 4]);
per1.calculage(1995);
per1.showınfo();
var employe = /** @class */ (function (_super) {
    __extends(employe, _super);
    function employe(name, id, phone, salary) {
        var _this = _super.call(this, name, id, phone) || this;
        _this.salary = salary;
        return _this;
    }
    employe.prototype.getSalary = function () {
        return this.salary;
    };
    employe.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    employe.prototype.changedepart = function () {
        console.log("your department is changing ");
    };
    employe.prototype.showınfo = function () {
        _super.prototype.showınfo.call(this);
        console.log("maaşınız: " + this.salary);
    };
    return employe;
}(person));
var emp1 = new employe("nasos", 2, [258852], 8000);
emp1.calculage(1998);
emp1.showınfo();
emp1.changedepart();
