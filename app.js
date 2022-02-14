const odiRules = document.querySelector("#oneday");
const t20Rules = document.querySelector("#t20");
const testRules = document.querySelector("#test");
const IPLRules = document.querySelector("#ipl");

odiRules.addEventListener("click", ()=>{
    window.open("pages/rules/rules-odi.html", "_self");
})

t20Rules.addEventListener("click", ()=>{
    window.open("pages/rules/rules-t20.html", "_self");
})

testRules.addEventListener("click", ()=>{
    window.open("pages/rules/rules-test.html", "_self");
})

IPLRules.addEventListener("click", ()=>{
    window.open("pages/rules/rules-ipl.html", "_self");
})