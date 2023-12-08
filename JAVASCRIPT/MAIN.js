let sidepanel_view =  false;
let searching = false;

function view_menubar(){
    document.querySelector('.sidePANEL').classList.add('sidePANEL-view');
    document.querySelector('.side_con').classList.add('side_con-view');
}
function hidemenubar(){
    document.querySelector('.sidePANEL').classList.remove('sidePANEL-view');
    document.querySelector('.side_con').classList.remove('side_con-view');
}

document.querySelector('.sidePANEL').innerHTML = `
            <div class="sidebar">
               <div class="side_con">
                    <img onclick="hidemenubar();" id="menuBAR" src="SVG/corner-down-left.svg" alt="menubar">
                    <a id="projects-selected" href="LDTG-PROJECTS.html">Projects</a>
                    <a href="">Artworks</a>
                    <a href="">Code Snippets</a>
                    <a href="">Icons</a>
                </div>
            </div>
            <div style="background-color: rgb(0, 0, 0,0.5);"></div>`

function searchBAR() {
      // Check if the screen width is below a certain threshold (e.g., 499 pixels)
  (window.innerWidth <= 499 && !searching)?
  [
    // if the user is on a smartphone
    document.querySelector('.searchbar').classList.add('use-searchbar'),
    document.querySelector('.search').classList.add('searching'),
    searching = true
  ]
  : [
    // if the user is on a smartphone
    document.querySelector('.searchbar').classList.remove('use-searchbar'),
    document.querySelector('.search').classList.remove('searching'),
    searching = false
  ]
}