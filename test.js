let a = '9+4-9-7'
let s = /([\+\*\/-][\+\*\/-])/g
let k = /^[0-9]/
let p = /[0-9]$/
let r1= s.test(a)
let r2= k.test(a)
let r3= p.test(a)

console.log(eval('++8-7'))
function ue(){
    if(!r1 && r2 && r3){
        return true
    }
    else{
        return false
    } 
}
console.log(ue())