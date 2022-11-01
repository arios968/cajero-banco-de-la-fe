




let billeteVerde = [
    { denominacion: 5000, _monto: 0, total: 0, }, { denominacion: 10000, _monto: 0, total: 0, },
    { denominacion: 20000, total: 0, }, { denominacion: 50000, _monto: 0, total: 0, }, { denominacion: 100000, _monto: 0, total: 0, },
]

let usuario = [
    { nombre: "victor", iD: 5, contraseña: "victoor1", tipoDeUsuario: 2, },
    { nombre: "Sergio", iD: 3, contraseña: "holi", tipoDeUsuario: 1, },
]

let miembro = null
let totalMoney = 0

function respuestaUsuario() {
    while (!miembro) {
        let iD = Number(prompt("Ingresa tu iD"));
        miembro = usuario.find((element) => element.iD === iD);
        if (!miembro) {
            console.log("Usuario no existe");
        }
    }

    if ( 1) {
        ingresarDinero();
    } else {
        if (totalMoney === 0) {
            console.log("Cajero vacio, vuelva pronto");
        
    }
    
}




    function ingresarDinero() {
        billeteVerde.forEach((billetes) => {
            billeteVerde._monto = Number(
                prompt(`cantidad de billetes verdes a ingresar ${billeteVerde.denominacion} `)
            );
            billeteVerde.total = billeteVerde._monto * billeteVerde.denominacion;
            totalMoney = totalMoney + billeteVerde.total;
            console.log(`ahora hay ${billeteVerde.total} en billetes de ${billeteVerde.denominacion}`);
        });
        console.log(`En total ingrese ${totalMoney}`);
        miembro = ""

        respuestaUsuario();


    }}
    
