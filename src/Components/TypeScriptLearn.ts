///Naming convention: camelCase
///is has prefix for bools
///CONT all caps
///filename.xlsx all small

///function names: camelCase

let employeeCode = 202;
let employeeName = 'jinsa';
let hasLearnedTypeScript = false;
let trainingStartDate = Date();
let employePackage = 15_000;

console.log('variable employeeCode is infered as integer based on the value assigned in it. Value-' + employeeCode);
console.log('variable employeeName is infered as string based on the value assigned in it. Value-' + employeeName);
console.log('name = 10; is not possible in typescript and its shows error in dev time itself');
console.log('variable typescriptlearned is infered as bool based on the value assigned in it. Value-' + hasLearnedTypeScript);
console.log('variable trainingStartDate is infered as date based on the value assigned in it. Value-' + trainingStartDate);
console.log('variable employePackage is infered as date based on the value assigned in it. Value-' + employePackage);

let employeeCode1 : number = 202;
let employeeName1: string = 'jinsa';
let hasLearnedTypeScript1 : boolean = false;
let trainingStartDate1 : Date = new Date();
let employePackage1 : number = 15_000;

console.log('variable employeeCode1 is explicitely defined as integer based on the value assigned in it. Value-' + employeeCode1);
console.log('variable employeeName is  explicitely defined  as string based on the value assigned in it. Value-' + employeeName1);
console.log('name = 10; is not possible in typescript and its shows error in dev time itself');
console.log('variable typescriptlearned is  explicitely defined  as bool based on the value assigned in it. Value-' + hasLearnedTypeScript1);
console.log('variable trainingStartDate is  explicitely defined  as date based on the value assigned in it. Value-' + trainingStartDate1);
console.log('variable employePackage is  explicitely defined  as date based on the value assigned in it. Value-' + employePackage1);

let empCodeString = employeeCode.toString();
let hasLearnedTS_Str = hasLearnedTypeScript.toString();
console.log('variable empCodeString is string converted. Value-' + empCodeString);
console.log('variable hasLearnedTS_Str is  string converted. Value-' + hasLearnedTS_Str);


let items: number[] = [1, 2, 3];
items = []; // Resets the array to empty
items = [1,2,3,4];

let itemNames : string[] = ['a', 'b', 'c'];
writeArray(itemNames);

let emptyArray :[] = [];

let emptyNumberArray : number[] = [];


function writeArray<T>(arrayName : T[])
{
    arrayName.forEach(element => {
        console.log(element);
    }); 
}

function addNumbersToEmptyNumberArray()
{
    emptyNumberArray = [1,2,3,4];
    emptyNumberArray.push(5);    
    writeArray(emptyNumberArray);
}