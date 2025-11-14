// Basic interactivity: prepare WhatsApp message from order form
document.getElementById('year').textContent = new Date().getFullYear();

function handleOrder(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const item = document.getElementById('item').value.trim();
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value.trim();
  if(!name || !phone || !item || !date){ alert('Please fill required fields'); return; }
  const text = encodeURIComponent(
    `Hello Bhuviash Cakes!%0AName: ${name}%0APhone: ${phone}%0AItem: ${item}%0ADelivery Date: ${date}%0AMessage: ${message}`
  );
  const wa = `https://wa.me/916382610994?text=${text}`;
  window.open(wa, '_blank');
}

// Order buttons on menu
document.querySelectorAll('.order-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const item = btn.dataset.item || '';
    document.getElementById('item').value = item;
    window.location.hash = '#order';
  });
});

function copyOrderLink(){
  const name = document.getElementById('name').value.trim() || 'MyName';
  const item = document.getElementById('item').value.trim() || 'Cake';
  const date = document.getElementById('date').value || '';
  const text = `Name: ${name} | Item: ${item} | Date: ${date}`;
  navigator.clipboard?.writeText(text).then(()=> alert('Order details copied to clipboard.'));
}
