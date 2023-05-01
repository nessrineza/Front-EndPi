import { category } from "./category";
import {  typeA } from "./type-a";


export class Announcement{
id! : number;
location! : String;
description! : String;
priceA! : Number;
priceTotalSpon! : Number;
priceTotal! : Number;
Verified! : boolean;
usId! : Number;
priceTotalDiscount! :Number;
discount! : Number;
picture! : String;
typeA! : typeA;
category! : category;


}
