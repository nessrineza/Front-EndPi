import { category } from "./category";
import {  typeA } from "./type-a";


export class Announcement{
id! : number;
location! : string;
description! : string;
priceA! : number;
priceTotalSpon! : number;
priceTotal! : number;
Verified! : boolean;
usId! : number;
priceTotalDiscount! :number;
discount! : number;
picture! : string;
typeA! : typeA;
category! : category;


}
