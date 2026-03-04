import estimatePrice from './Least_Squares_solution/logic.js'
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    const rl = readline.createInterface({ input, output });
    
    try {
        console.log("--- Système de Prédiction de Prix ---");    // predict a variable y 
        const answer = await rl.question('Saisir kilométrage : ');   // inser value of variable x
        const mileage = parseFloat(answer);

        if (isNaN(mileage))     
            throw new Error("Entrée invalide.");

        const result = await estimatePrice(mileage);
        console.log(`Prix final : ${result.toFixed(2)}`);   // result

    } catch (err) {
        console.error("Erreur :", err.message);
        return null;;
    } finally {
        rl.close();
    }
}

main();