import { Router } from './router.js'
import { Backgrounds } from "./eventos.js";
import { bgHome, bgUniverse, bgExplorer } from "./elements.js";




let backgrounds = Backgrounds({
  bgHome,
  bgUniverse,
  bgExplorer,
  
});



if (bgHome) {
    bgHome.addEventListener("click", function () {
      backgrounds.backHome()
    });
  }
  
  if (bgUniverse) {
    bgUniverse.addEventListener("click", function () {
      backgrounds.backUniverse()
    });
  }
  
  if (bgExplorer) {
   bgExplorer.addEventListener("click", function () {
      backgrounds.backExplorer();
    });
  }



const router = new Router ()


router.add("/", "/page/home.html")
router.add("/universe", "/page/universe.html")
router.add("/explorer", "/page/explorer.html")



router.handle()


window.onpopstate = () => router.handle ()
window.route = () => router.route ()


//const btnHome = document.home.querySelector("#btn")
  

function btnHome () {
  console.log("seu merda")
}