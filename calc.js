/*
let st = 'how  regine are you + today mere areee - jaan'
let reg = /.r/g;
let result = st.match(reg)
console.log(result)
*/

// const text = 'hey this is _ someone using their + phone no. 099-998-2345 and the phone no. 2 is 332-566-0987 and phone no. 3 is something different 564.876.0987 this phone no. is seperated by (.) ohk'

// //                      capturing groups 
// let reg = /\w/gi;
// let result = text.match(reg)
// console.log(result)



/*

let str = "4+6"
let k= str.split(/[\+\-]/).reduce((str,cur)=>{
    str.push(cur)
    return str
},[])
console.log(k)
*/


/*
const add=()=>{
    let str= document.getElementById('inp').value
    let k= str.split(/[\+\-]/)
    console.log(Number(k[0])+Number(k[1]))
    // return (Number(arr[0])+Number(arr[1]))
}
*/
let previous_val = "previous value"
let current_val = ""
let output = document.getElementById('output')
let old_operation = document.getElementById('old-operation')
let current_operation = document.getElementById('current-operation')


const allClear = () => {
    current_val=''
    output.innerText = "0"
    old_operation.innerText = "0"
    current_operation.innerText = current_val
}

const input = (id) => {
    current_val = current_val.concat(id)
    current_operation.innerText = (current_val)
}

const checkInp_operation = () => {
    let s = /([\+\*\%\^\/-]{2,})/g;
    let p = /[0-9]$/
    let r1 = s.test(current_val)  // test to check there is operator held twice succively 
    let r2 = p.test(current_val)

    if ( !r1 && r2) { //  !r1 means there is no operator use twice or more than twice succively
        return eval(current_val)
    }
    else {
        return('pls input valid input')
    }
}


const setValue =(func)=>{
    output.innerText = checkInp_operation()
    previous_val = current_val;
    old_operation.innerText = previous_val;
    current_val = ''
    current_operation.innerText= current_val
 }

// const equal = () => {

// }
