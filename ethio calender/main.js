const gcEl = document.getElementById("todayGC")
const etEl = document.getElementById("todayEC")
const btn = document.querySelector(".btn")
const options = document.getElementById("select")
const result = document.getElementById("result")
const dayEl= document.getElementById("dayEl")
const monthEl = document.getElementById("monthEl")
const yearEl = document.getElementById("yearEl")
const error = document.getElementById("error")







// G.C

const gcYear = new Date().getFullYear()


const gcDayNumber = new Date().getDate()


const dayName = new Date().getDay()
let dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let gcDaysName = dayNames[dayName]

let month = new Date().getMonth()
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let gcMonth = months[month]



gcEl.innerText = `${gcDaysName}-${gcMonth}-${gcDayNumber}-${gcYear}`




// ETHIOPIAN CALENDER
const zare = new Zemen();    
let ET = zare.format('d,MMM DD YYYY E');
etEl.innerText = ET





const converter = ()=>{
    
    let total = `${yearEl.value}-${monthEl.value}-${dayEl.value}`
    if(yearEl.value=="" || monthEl.value=="" || dayEl.value==""){
        error.innerText="Enter a year , month and a day "
    }
    
    else if(options.value == "GC-EC"){
        result.innerText = Zemen.toEC(total).format('MMM-DD-YYYY') 
        console.log(total)
    }else if(options.value == "EC-GC"){
        result.innerText = Zemen.toGC(total).toDateString()
}}

btn.onclick=()=>{
    result.innerText=""
    converter()
    
}



