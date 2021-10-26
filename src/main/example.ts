export function romanNumber(input : number) : string {
    let romanString = '';  
    
    if(input >= 50){
        romanString += 'L';
        input = input - 50;
    }

    while(input > 9 && input < 40){
        romanString += 'X';
        input = input - 10;
    }

    if(input >= 5 && input < 9){
        romanString += 'V';
        input = input -5;
    }    
    
    while (input > 0 && input < 4) {
        romanString += 'I';
        input --;
   }

   if(input === 4){
       romanString += 'IV';
   }

   if(input === 9){
       romanString += 'IX';
   }

   if(input === 40){
      romanString += 'XL';
    }   
   
   return romanString;   
}
