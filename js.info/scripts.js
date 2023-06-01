window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit= function(event){
        event.preventDefault();
        console.log("test1");
        let lions = document.getElementById("lions");
        lions.setAttribute("class", "hidden");
        
        let giraffes = document.getElementById ("giraffes");
        giraffes.setAttribute("class", "hidden");

        let cats = document.getElementById ("cats");
        cats.setAttribute("class", "hidden");

        let others  = document.getElementById("others");
        others.setAttribute ("class", "hidden");

        const her = (document.querySelector("input#orel").value);
        console.log(her);

        if (her === "lions") {
            lions.removeAttribute ("class");
        
        } else if (her === "giraffes"){ 
            giraffes.removeAttribute ("class");
         
        } else if (her === "cats"){
            cats.removeAttribute ("class");

        } else if (her === "others"){
            others.removeAttribute ("class");
        }
                    

        
    };
};