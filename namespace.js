var FANG0055 = {
    init: function init() {
        let square = document.createElement("div");
        square.className = "box";
        square.textContent = "fang0055";
        let squares = document.getElementById("boxes");
        squares.appendChild(square);

        square.addEventListener("click", squareClick);
        square.addEventListener("mouseover", mouseOver);
        square.addEventListener("mouseout", mouseOut);

        function squareClick() {
            this.style.borderColor = "hsl(182deg, 100%, 10%)";
            this.style.backgroundColor = "hsl(182deg, 100%, 23%)";
        }

        function mouseOver() {
            this.target.classList.toggle("highlight");
        }

        function mouseOut() {
            this.target.classList.toggle("highlight");
            this.target.removeAttribute('style'); // remove any style added by the click event
        }
    }
};