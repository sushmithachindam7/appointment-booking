function showServices() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('services').classList.remove('hidden');
}

function showBooking(service) {
  document.getElementById('services').classList.add('hidden');
  document.getElementById('booking').classList.remove('hidden');
  document.getElementById('serviceTitle').innerText = "Booking: " + service;
}

function confirmBooking() {
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  document.getElementById('booking').classList.add('hidden');
  document.getElementById('confirmation').classList.remove('hidden');
  document.getElementById('confirmText').innerText = 
    `Your appointment is booked for ${date} at ${time}.`;
}
