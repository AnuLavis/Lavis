
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('form.contact');
if (form) {
  form.addEventListener('submit', (e)=>{ e.preventDefault(); const note=form.querySelector('.form-note'); if (note){ note.textContent='Thanks! We'll get back to you shortly.';} form.reset(); });
}
