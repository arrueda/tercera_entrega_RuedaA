// Variables globales
let insertDOMcontent = document.querySelector('#insertDOMcontent');
let listaCasasCarrito = document.querySelector('#listaCasasCarrito');
let casasSeleccionadas = [];
let precCont = 0;
let precCuota = 0;
let buttonCard = 0;


// Array de objetos de variables
let listaInmuebles = [ 
{
    "_id": "634eabe2e80037f5592d3ff9",
    "isActive": true,
    "precio": "178,846.69",
    "picture": "https://loremflickr.com/320/240/house",
    "age": 59,
    "nameVendedor": "Strickland Vega",
    "emailVendedor": "stricklandvega@farmage.com",
    "phoneVendedor": "+1 (919) 570-3734",
    "addressCasa": "945 Poplar Avenue, Steinhatchee, Guam, 8443",
    "registeredDaty": "2016-05-02T11:09:58 +03:00"
},
{
    "_id": "634eabe25db3025e276813c9",
    "isActive": false,
    "precio": "325,754.03",
    "picture": "https://loremflickr.com/320/240/house",
    "age": 30,
    "nameVendedor": "Holloway Mercado",
    "emailVendedor": "hollowaymercado@farmage.com",
    "phoneVendedor": "+1 (815) 549-3296",
    "addressCasa": "954 Durland Place, Albany, New Mexico, 6428",
    "registeredDaty": "2021-04-01T02:00:24 +03:00"
},
{
    "_id": "634eb2813e6dade54a3ef25f",
    "isActive": false,
    "precio": "183,904.18",
    "picture": "https://loremflickr.com/320/240/house",
    "age": 43,
    "nameVendedor": "Hubbard Ferrell",
    "emailVendedor": "hubbardferrell@farmage.com",
    "phoneVendedor": "+1 (913) 578-2816",
    "addressCasa": "657 Nelson Street, Croom, Alabama, 7075",
    "registeredDaty": "2017-05-09T05:31:45 +03:00"
},
{
    "_id": "634eabe2ec9e06e8fda85f3c",
    "isActive": false,
    "precio": "151,150.71",
    "picture": "https://loremflickr.com/320/240/house",
    "age": 65,
    "nameVendedor": "Maxwell Mcneil",
    "emailVendedor": "maxwellmcneil@farmage.com",
    "phoneVendedor": "+1 (999) 509-2566",
    "addressCasa": "467 Beverly Road, Springdale, Alaska, 9180",
    "registeredDaty": "2020-12-12T08:59:41 +03:00"
},
{
    "_id": "634eabe2360c8a58343a4a81",
    "isActive": true,
    "precio": "388,510.82",
    "picture": "https://loremflickr.com/320/240/house",
    "age": 58,
    "nameVendedor": "Nguyen Christensen",
    "emailVendedor": "nguyenchristensen@farmage.com",
    "phoneVendedor": "+1 (922) 589-3519",
    "addressCasa": "305 Kenmore Terrace, Ripley, Louisiana, 2617",
    "registeredDaty": "2017-10-02T06:56:31 +03:00"
},
{
    "_id": "634eabe28a8fff630cccbacb",
    "isActive": false,
    "precio": "207,582.89",
    "picture": "https://loremflickr.com/320/240/house",
    "age": 71,
    "nameVendedor": "Morin Wright",
    "emailVendedor": "morinwright@farmage.com",
    "phoneVendedor": "+1 (883) 579-3574",
    "addressCasa": "976 Underhill Avenue, Outlook, Colorado, 8238",
    "registeredDaty": "2022-03-01T05:22:49 +03:00"
},
{
    "_id": "634ee21350f7f10910b1d141",
    "isActive": false,
    "precio": "227,718.71",
    "picture": "http://placehold.it/32x32",
    "age": 86,
    "nameVendedor": "Aileen Rocha",
    "emailVendedor": "aileenrocha@farmage.com",
    "phoneVendedor": "+1 (805) 436-3962",
    "addressCasa": "464 Jamaica Avenue, Weedville, Oregon, 6814",
    "registeredDaty": "2015-12-24T06:15:33 +03:00"
},
{
    "_id": "634ee21325c9f0ff2bd8b7eb",
    "isActive": true,
    "precio": "205,247.27",
    "picture": "http://placehold.it/32x32",
    "age": 61,
    "nameVendedor": "Mcfadden Alvarado",
    "emailVendedor": "mcfaddenalvarado@farmage.com",
    "phoneVendedor": "+1 (985) 451-3768",
    "addressCasa": "480 Morgan Avenue, Homeworth, Utah, 158",
    "registeredDaty": "2017-12-23T06:39:30 +03:00"
},
{
    "_id": "634ee213f3c8e77374b1ef7f",
    "isActive": true,
    "precio": "172,678.77",
    "picture": "http://placehold.it/32x32",
    "age": 48,
    "nameVendedor": "Miranda Whitney",
    "emailVendedor": "mirandawhitney@farmage.com",
    "phoneVendedor": "+1 (889) 402-2792",
    "addressCasa": "970 Kay Court, Aberdeen, Alaska, 1789",
    "registeredDaty": "2019-03-30T01:43:17 +03:00"
}      
]

// Encapsulamiento de variables de intereses y descuentos porcentuales.
function VariblePorcent(desc, inter) {
    let _desc = desc;
    let _inter = inter;
    
    Object.defineProperty(this,"_getDesc",{
        get:function(){
            return _desc
        }
    })

    Object.defineProperty(this,"_getInter",{
        get:function(){
            return _inter
        }
    })

    Object.defineProperty(this,"_setDesc",{
        set:function(desc){
            _desc = desc
        }
    })

    Object.defineProperty(this,"_setInter",{
        set:function(inter){
            _inter = inter
        }
    })
}

VariblePorcent.prototype.getDesc= function(){
    return this._getDesc
}

VariblePorcent.prototype.getInter= function(){
    return this._getInter
}

VariblePorcent.prototype.setDesc= function( desc ){
    return this._setDesc= desc
}

VariblePorcent.prototype.setInetr= function( inter ){
    return this._setInter= inter
}

let v1 = new VariblePorcent(0.85, 1.13);

console.log("Salida de variable de descuento e intereses--> ", v1);
console.log(v1.getDesc());
console.log(v1.getInter());

// Conversion de string a numero float sacando la coma del string
function parsePotentiallyGroupedFloat(stringValue) { 
    stringValue = stringValue.trim(); 
    let result = stringValue.replace(/[^0-9]/g, ''); 
    if (/[,\.]\d{2}$/.test(stringValue)) { result = result.replace(/(\d{2})$/, '.$1');
    } return parseFloat(result);
}

function prinDate(objects) {
    objects.forEach((element) => {
              
        precCont = parsePotentiallyGroupedFloat(element.precio)*v1.getDesc(); // Calculo de pago contado 
        precCuota = parsePotentiallyGroupedFloat(element.precio)*v1.getInter(); // Calculo de pago cuotas

        // Iteraccion con los valores del array de objetos
        cardsInmuebles.innerHTML+= `<div class="card mb-3" style="background-color: aquamarine">
        <div class="row g-0">
          <div class="col-md-4 text-center colUno">
            <img src="https://loremflickr.com/320/240/house" class="img-fluid rounded-start" alt="Tipos de casas">
            <a href="#" class="btn btn-info mt-4 agregar-carrito" id="${element._id}">Agregar a lista de viviendas</a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Vendedor: ${element.nameVendedor}</h5>
              <p class="card-text">Muy linda y moderna. La propiedad construida con materiales de alta calidad se desarrolla en 2 plantas.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Teléfono del vendedor: ${element.phoneVendedor}</li>
                <li class="list-group-item">Email del vendedor: ${element.emailVendedor}</li>
                <li class="list-group-item">Dirección del inmueble: ${element.addressCasa}</li>
                <li class="list-group-item">Cantidad de años del inmueble: ${element.age}</li>
                <li class="list-group-item">Precio del inmueble: ${element.precio} USD.</li>
                <li class="list-group-item">Descuento 15% contado: ${precCont.toFixed(2)} USD // Interes semestral 13% en cuotas: ${precCuota.toFixed(2)} USD</li>
          </div>
        </div>
      </div>`
      
    });
}

prinDate(listaInmuebles)

// Formacion del carrito
function agregarInmueblesAlCarro() {
    listaCasasCarrito.innerHTML = ``
    casasSeleccionadas.forEach(( element )=>{
        listaCasasCarrito.innerHTML += `<tr>
        <td><img class="imgFitMiniatura" src="https://loremflickr.com/320/240/house" alt="Casas en ventas"></td>
        <td class="text-center">${element.nameVendedor}</td>       
        <td class="text-center">${element.precio} USD</td>
        <td class="text-center"><a href="#" id="${element._id}" class="borrar-inmueble">X</a></td>
      </tr>`
    })

    sincronizarLocalStorage();

    //Boton de eliminacion del carrito
    let buttonDelet = document.querySelectorAll('.borrar-inmueble');

    buttonDelet.forEach(element=>{
        element.addEventListener('click', (e)=>{
            e.preventDefault();
            let id = e.target.id;
            casasSeleccionadas = casasSeleccionadas.filter( inmueble => inmueble._id !== id );
            agregarInmueblesAlCarro()
        })
    })

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        casasSeleccionadas = []
        agregarInmueblesAlCarro()
    })
}
 

//Sincronizacion con el local storage
function sincronizarLocalStorage(params) {
    localStorage.setItem("listaInmuebles", JSON.stringify(casasSeleccionadas))
}

document.addEventListener('DOMContentLoaded', ()=>{
    casasSeleccionadas = JSON.parse(localStorage.getItem('listaInmuebles')) || []
    agregarInmueblesAlCarro()
})

function separarIdInmueble(idInmueb, arrayInmuebles) {
    let inmueblesSeleccionados = arrayInmuebles.find(element => idInmueb == element._id);
    let inmuebleArray = [];
    inmuebleArray.push(inmueblesSeleccionados);
    casasSeleccionadas = [...casasSeleccionadas, ...inmuebleArray];
    agregarInmueblesAlCarro();
    console.log('zzz---> ',casasSeleccionadas)
}

buttonCard = document.querySelectorAll('.colUno a');

buttonCard.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        event.preventDefault();
        let id = event.target.id;
        separarIdInmueble(id, listaInmuebles)
    })
})

