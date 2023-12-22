//A a partir del array ages=[15, 45, 50] agregue su edad. Usando un for con un if, muestre en pantalla  solo las edades mayores a 25"


let ages = [15, 45, 50];
ages.unshift(24);
alert(ages)

// Mostrar solo las edades mayores a 25
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25) {
        alert(`${ages[i]}`);
    }
}