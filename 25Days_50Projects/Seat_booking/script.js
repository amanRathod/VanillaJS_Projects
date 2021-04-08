const container = document.querySelector('.container');
// This will nodeList which will contain all not occupied seat
// Use Array.from() to convert nodeList into array;
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// parseInt to convert string into integer or '+' symbol before element
let ticketPrice = parseInt(movieSelect.value);


// update total and count
const updateSelectedCount = () => {

    //count.textContent = (parseInt(count.textContent) + 1);
    //total.textContent = (parseInt(total.textContent) + ticketPrice);
    // selected class was added in classList of element when toggle was fired
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.textContent = selectedSeatsCount;
    total.textContent = selectedSeatsCount * ticketPrice;

}

movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    updateSelectedCount();
});

const book_seat = (e) => {
    e.seat.selected;
}

container.addEventListener('click', e => {
    // classList contain element's all class attributes value (key = "value")
    // toggle is used to add and remove the given class to an element
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }    
});