// Least Squares solution
import linear_regression_data from './coefficients.js'

let coefficients = null;

async function initi_coefficients(){
    if(!coefficients)
        coefficients = await linear_regression_data();
}


// Slope θ1  teta_1
async function calculate_tetaOne(){
    const { ensembelY , ensembelX , x_pow_two , xy ,  number_observations} = coefficients;

    const denominator  =  ((number_observations * x_pow_two) - (Math.pow(ensembelX , 2)));
    if(denominator === 0) return null;

    var tetaOne = ((number_observations * xy) - ( ensembelX * ensembelY )) / denominator;
     
    return tetaOne;

}

// Intercept θ0 teta_0
async function calculate_tetaZero(tetaOne){


    const { ensembelY , ensembelX  , number_observations} = coefficients;
    var tetaZero = 
        ((ensembelY ) - ( tetaOne * ensembelX )) / (number_observations);
    return tetaZero;
  
}
//estimatePrice(mileage) = θ0 + (θ1 ∗ mileage)
export default async function estimatePrice(milage) {
    try{
        var estimate_price_result = 0;
        await initi_coefficients();
        if(!coefficients)
                throw new Error("cannot get Data from linear_regression_data function to calculate ");
    
        const tetaOne =  await calculate_tetaOne();
     
        if(tetaOne === undefined || tetaOne === null)
               throw new Error("cannot get tetaOne  to calculate Our tetaZero");

        const  tetaZero = await calculate_tetaZero(tetaOne);
        //console.log(`estimatePrice(mileage) = ${tetaZero} + (${tetaOne} ∗ mileage)\n`)
         estimate_price_result = tetaZero + (tetaOne * milage);
   
        return  estimate_price_result;

    }
     catch(err){
        console.error(err.message);
        return null;
    }
}

