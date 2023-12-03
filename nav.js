const pages = [
    {name: "ACS Board", path: "boards/ACS.html", id:"ACS"},
    {name: "GP Board", path: "boards/GP.html", id:"GP"},
]

// const git_buttons = [
//     {name: "ACS Board", path: "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Boards/blob/main/boards/ACS.html", id: "ACS"},
//     {name: "GP Board", path: "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Boards/blob/main/boards/GP.html", id: "GP"}
// ]

const git_url = "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Boards/blob/"
const branches = ["main", "dev"]

function makeGitURL(file){
    let url =  document.url
    for(i in branches){
        if(url.includes(branches[i])){
            return `${git_url[0]}${branches[i]}${file}`
        }
    }
}
function foot_nav(location){
    loadnav(location)
    load_footer()
}

function createbuttons(parent, array, location, github){
    console.log(parent)
    console.log(array)
    console.log(location)
    // Get the element based on the ID of the provided parent
    parent = document.getElementById(parent)
    // For each element in the array 
    for(i in array){
        // Create a new element for the button
        let button = document.createElement("a")
        // Check if location is provided
        if(typeof location !== "undefined"){
            // Set the atribute for the button to be a reference to a different page (used for nav)
            if(github){
                button.setAttribute("href",`${location}${makeGitURL(array[i].path)}`)
            } else {
                button.setAttribute("href",`${location}${array[i].path}`)
            }
           
            button.setAttribute("id", array[i].id)
        }
        // set the inner HTML (the text) to the name of the element
        button.innerHTML = array[i].name  
        // Append the button to the parent
        parent.appendChild(button)
    }
}

// This loads the navigation based on the current location as well as if the page is on github
// Note this will be optimized to use one array, as well as change what branch you are on in github in the future

function loadnav(location){
    //<a class="home_img" href="home.html"><img id="svgImage" src="home.svg" width="40px"></a> 
    let parent = document.getElementById("nav")

    // The following lines create the HTML nav image
    let nav_image = document.createElement("a")
    nav_image.setAttribute("class", "home_img")
    let url = document.URL


    parent.appendChild(nav_image)

    let image = document.createElement("img")
    image.setAttribute("id","svgImage")
    image.setAttribute("src","/images/home.svg")
    image.setAttribute("width","50px")
    nav_image.appendChild(image)

    // Create a div for the nav items
    let nav_items = document.createElement("items")
    nav_items.setAttribute("id", "items")
    parent.appendChild(nav_items)
    
    // If the URL includes github set the reference to github viewer
    if(url.includes("github")){
        nav_image.setAttribute("href", "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Boards/blob/main/index.html")
        // Call the create buttons functions, which makes the eliments of the buttons based on the array
        createbuttons("items", pages, location, true)
        alert("Warning! You viewing this on github, and it may cause issues, please notify Squibs if there is an issue")
    } else{
      nav_image.setAttribute("href", `${location}index.html`)
      createbuttons("items", pages, location, false)  
    }

    
}

function load_footer(){
    footer = document.getElementById("footer")
    footer.innerHTML = `
        <img if="uat-logo" src="../images/uat-logo.png"><br>
        <a href="https://www.uat.edu/">UNIVERSITY OF ADVANCING TECHNOLOGY</a><br>
        2625 W. Baseline Road<br>
        Tempe, AZ 85283-1056<br>
        <br>
        Main Telephone: 602-383-8228<br>
        Out of State: 877-UAT-GEEK (877-828-4335)<br>
    
    `
}
