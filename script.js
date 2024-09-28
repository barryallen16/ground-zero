
function countdownTimer() {
    const eventDate = new Date('September 29, 2024 00:00:00').getTime();

    const updateTimer = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

        if (timeLeft < 0) {
            clearInterval(updateTimer);
            document.getElementById('countdown-timer').innerHTML = "<h3>Event has started!</h3>";
        }
    }, 1000);
}

countdownTimer();

const modal = document.getElementById('ticket-modal');
const buyTicketBtns = document.querySelectorAll('.buy-ticket-btn');
const closeModalBtn = document.getElementById('close-modal');
const confirmPurchaseBtn = document.getElementById('confirm-purchase');

const ticketQuantityInput = document.getElementById('ticket-quantity');

buyTicketBtns.forEach(button => {
    button.onclick = (e) => {
        const eventName = e.target.getAttribute('data-event');
        document.getElementById('event-name').innerText = `Event: ${eventName}`;
        modal.style.display = 'block';
    };
});
// window.watsonAssistantChatOptions = {
//     integrationID: "fdfa95c2-ef36-4d60-84d5-1fad8dd46403",
//     region: "au-syd",
//     serviceInstanceID: "28e5e3d0-9536-499f-ac19-43b4a2cb44f6",
//     onLoad: async (instance) => { await instance.render(); }
//   };
//   setTimeout(function(){
//     const t=document.createElement('script');
//     t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
//     document.head.appendChild(t);
//   });
closeModalBtn.onclick = () => {
    modal.style.display = 'none';
    ticketQuantityInput.value = 1;
};

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

confirmPurchaseBtn.onclick = () => {
    const quantity = ticketQuantityInput.value;
    alert(`You have successfully purchased ${quantity} ticket(s)!`);
    modal.style.display = 'none';
    ticketQuantityInput.value = 1;
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        ticketQuantityInput.value = 1;
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const buyTicketButtons = document.querySelectorAll('.buy-ticket-btn');
    const ticketInfo = document.getElementById('ticket-info');
    const ticketList = document.getElementById('ticket-list');
    const selectedEventElem = document.getElementById('selected-event');
    const ticketQuantityInput = document.getElementById('ticket-quantity');

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }); 
    const hamburger = document.getElementById('hamburger');


    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });        
    buyTicketButtons.forEach(button => {
        button.addEventListener('click', () => {
            const eventName = button.getAttribute('data-event');
            selectedEventElem.textContent = `Event: ${eventName}`;
            ticketInfo.style.display = 'block';
        });
    });

    document.getElementById('increase-btn').addEventListener('click', () => {
        let value = parseInt(ticketQuantityInput.value);
        ticketQuantityInput.value = value + 1;
    });

    document.getElementById('decrease-btn').addEventListener('click', () => {
        let value = parseInt(ticketQuantityInput.value);
        if (value > 1) {
            ticketQuantityInput.value = value - 1;
        }
    });

    document.getElementById('confirm-purchase').addEventListener('click', () => {
        const eventName = selectedEventElem.textContent.replace('Event: ', '');
        const quantity = parseInt(ticketQuantityInput.value);

    });

    loadTickets();
});
