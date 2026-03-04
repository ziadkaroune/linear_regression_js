
// read data.csv
export async function getData(){

            var data ;
            const read_csv = await fs.readFile('./data.csv' , 'utf-8');
            if(!read_csv)
                    throw new Error("coudn't read the file");
                data = read_csv.split('\n').slice(1).filter(Boolean).map((element) => {
                  const [ km , price ] =  element.split(',');
                  return {x : Number(km) , y : Number(price)}
            })
            return data;
}