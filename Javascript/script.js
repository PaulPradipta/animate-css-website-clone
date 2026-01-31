const title = document.getElementById("title")
const successMsg = '<i class="ri-checkbox-circle-fill"></i> <span>Copied</span>'

const addEffect = (effect)=>{ 
    title.className = effect
}

const removeEffect = ()=>{
    title.className = ""
}

const copyAnimation = (effect)=>{
    const toastBox = document.getElementById('toastBox')
    const toast = document.createElement('div')
    toast.innerHTML = successMsg
    toastBox.appendChild(toast)
    toast.classList.add('toast')

    navigator.clipboard.writeText(effect)

    setTimeout(()=>{
        toast.remove()
    },1500)
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
