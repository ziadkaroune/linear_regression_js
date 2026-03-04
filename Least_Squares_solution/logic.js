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


