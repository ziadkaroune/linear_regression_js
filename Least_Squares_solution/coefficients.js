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


