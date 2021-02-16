// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Daniela';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Bruno', 'Beluco'];
const array2: ReadonlyArray<string> = ['Bruno', 'Beluco'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
