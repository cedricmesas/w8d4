// Pyramide de Mario

let num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function sayMario(num) {
    let n 
    for(i = 1; i <= num; i++)
    {
        n = `${" ".repeat(num - i)}` + `${"#".repeat(i)}`;
        console.log(n) 
    }
}
sayMario(num);
