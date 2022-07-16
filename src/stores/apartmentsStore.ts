//import { writable } from 'svelte/store';
//export class data_type {
//    name="";
//    image="";
//    builder="";
//    descr="";
//    id=0;
//}
//export let apartmentCards = Array<data_type>();
//const fetchApartments = async () => {
//    const url = 'http://127.0.0.1:8000/apartments/';
//    const res = await fetch(url);
//    const data = await res.json();
//    apartmentCards = data.results.map((data: data_type, index: number) => {
//        let d:data_type = new data_type();
//        d.name = data.name;
//        d.builder = data.builder;
//        d.descr = data.descr;
//        d.id = data.id;
//        d.image = data.image;
//        return d;
//    });
//};
//fetchApartments();