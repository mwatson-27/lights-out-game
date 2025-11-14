//john
const grid_area = document.getElementById("grid-holder")
const spawn_button = document.getElementById("spawn-grid")

function spawn_grid(width, height) {
    for (let i = 0; i++; i < height) {
        for (let i = 0; i++; i < width) {
            grid_area.appendChild(`<div id="square${1}" class="grid-item off"></div>`)
        }
    }
}


