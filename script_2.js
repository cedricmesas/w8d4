// Calculs rapides
let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
function Factorial(num)
{
    if (num === 0)
        { return 1; }
    else
        { return num * Factorial( num - 1 ); }
}
console.log(`Le résultat est : ${Factorial(num)}`);

