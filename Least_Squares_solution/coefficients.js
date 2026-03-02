// Least Squares solution

import fs from 'fs/promises'

let data = null;

// read data.csv
async function getData(){

            const read_csv = await fs.readFile('./datatest.csv' , 'utf-8');
            if(!read_csv)
                    throw new Error("coudn't read the file");
                data = read_csv.split('\n').slice(1).filter(Boolean).map((element) => {
                  const [ km , price ] =  element.split(',');
                  return {x : Number(km) , y : Number(price)}
            })
            return data;
}
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

