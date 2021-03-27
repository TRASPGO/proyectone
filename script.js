
        //Atencion con getElements XD
        const form = document.getElementById("form");
        const btn = document.getElementById("go")
        const nombre = document.getElementById("nombre");
        const para = document.getElementById("para")
        btn.addEventListener("click",()=>    {
            texto = nombre.value;
            para.innerHTML = "Bienvenido " + texto
            form.classList.remove("form-style")
            form.classList.add("form")
        })