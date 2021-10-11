function highlight(table) {

    for (let row of table.rows) {

        for (i = 0; i < row.cells.length; i++) {
            if (row.cells[i].dataset.available == "true") {
                row.classList.add("available");
            } else if (row.cells[i].dataset.available == "false") {
                row.classList.add("unavailable");
            } else if ((row.cells[i].dataset.available == null)) {
                row.setAttribute("hidden", "hidden");
            }
        }

        if (row.cells[2].innerHTML == "m") {
            row.classList.add("male");
        } else if (row.cells[2].innerHTML == "f") {
            row.classList.add("female");
        }

        if (row.cells[1].innerHTML < 18) {
            row.style.textDecoration = "line-through";
        }


    }

}
