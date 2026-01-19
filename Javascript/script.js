const title = document.getElementById("title")

const addEffect = (effect)=>{ 
    title.className = effect
}

const removeEffect = ()=>{
    title.className = ""
}

const copyAnimation = (effect)=>{
    navigator.clipboard.writeText(effect)
}

const addDarkMode = ()=> {
    const logo = document.getElementById("icon")
    const page = document.getElementById("page") 
    
    page.classList.toggle("dark-theme")

    if(page.classList.contains("dark-theme")) {
        logo.src="Images/Sun-Icon.png"
    }
    else {
        logo.src="Images/Moon-Icon.png"
    }
}
