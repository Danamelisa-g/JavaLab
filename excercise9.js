/*
Ejercicio 9: Conversor de temperaturas
Crea una función llamada convertirTemperatura(temperatura, escala) 
que reciba una temperatura y una escala ("C" para Celsius o "F" para Fahrenheit), 
y convierta la temperatura a la otra escala. Retorna la temperatura convertida. 
Si la escala es "C", convierte de Celsius a Fahrenheit. Si la escala es "F", convierte de Fahrenheit a Celsius.
*/
function convertirTemperatura(temperatura, escala) {
    if (escala === "C") {
        // Convertir de Celsius a Fahrenheit
        const temperaturaFahrenheit = (temperatura * 9/5) + 32;
        return temperaturaFahrenheit;
    } else {
        // Convertir de Fahrenheit a Celsius
        if (escala === "F") {
            const temperaturaCelsius = (temperatura - 32) * 5/9;
            return temperaturaCelsius;
        } else {
            return "Escala no reconocida";
        }
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 9")
console.log("-----------------------------------")
console.log(convertirTemperatura(0, "C"));  // 32
console.log(convertirTemperatura(32, "F")); // 0