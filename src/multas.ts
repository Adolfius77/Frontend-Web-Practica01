type estadoPrestamo = "activo" | "vencido" | "devuelto";

interface Prestamo {
    multa: number;
    ejemplar: number;
    estaado: estadoPrestamo;
    nombre?: string;
}
function calcularMulta(prestamo: Prestamo): number{
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

const prestamo : Prestamo = {multa: 350, ejemplar: 14, estaado: "vencido", nombre: "Juan"};

function recibo(prestamo: Prestamo): string{
    if(prestamo.nombre === undefined){
        return "No hay nombre we";
    } else {
        return `Recibo para ${prestamo.nombre}, estado: ${prestamo.estaado}, multa: ${calcularMulta(prestamo)}`;
    }
}
console.log(recibo(prestamo));
