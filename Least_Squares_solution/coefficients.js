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
