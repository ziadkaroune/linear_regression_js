// Least Squares solution
import linear_regression_data from './coefficients.js'

let coefficients = null;

async function initi_coefficients(){
    if(!coefficients)
        coefficients = await linear_regression_data();
}

