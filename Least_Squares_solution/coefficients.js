// Least Squares solution


import getData from '../utils/readData.js'



var data =  await getData();

function EnsembleVariables(){     /// ∑X ∑Y
   
    var ensembelY  = 0 , ensembelX = 0 ;
    data.forEach((variable) =>{
        ensembelY += variable.y;
        ensembelX += variable.x;
    })
    return { ensembelY  , ensembelX }
}

function MultiplicationVariables(){   // ∑XY
    var xy = 0;
    data.forEach((variY) =>{ xy += variY.x * variY.y});
    return xy;
}

function Powertwovariables(){   // ∑X^2 
    var x_carre = 0;
    data.forEach((variY) =>{ x_carre += Math.pow( variY.x , 2) })
    return x_carre;
}

function Number_observations(){  // n 
      return data.length;
}

export default async function linear_regression_data(){
    
        await getData(); // read data from .csv
        const { ensembelY, ensembelX } = EnsembleVariables();  // ∑X ∑Y
        const x_pow_two =Powertwovariables();  // ∑X2
        const xy   = MultiplicationVariables(); // XY
        const n =  Number_observations();   // n
        return {
            ensembelY : ensembelY ,
            ensembelX : ensembelX ,
            x_pow_two : x_pow_two ,
            xy : xy ,
            number_observations : n
        }
    
}

