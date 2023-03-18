

export function Backgrounds({ bgHome, bgUniverse, bgExplorer, }) {
    
    
    
    function backHome() {
      document.body.classList.remove("universe");
      document.body.classList.remove("explorer");
      document.body.classList.add("home");
    }
    function backUniverse() {
      document.body.classList.remove("explorer");
      document.body.classList.remove("home");
      document.body.classList.add("universe");
    }
    function backExplorer() {
      document.body.classList.remove("home");
      document.body.classList.remove("universe");
      document.body.classList.add("explorer");
    }

   
  
    return {
      backHome,
      backUniverse,
      backExplorer,
      
  }
}
