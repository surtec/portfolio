document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('.form-submit');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  const data = {
    fname:   this.fname.value.trim(),
    lname:   this.lname.value.trim(),
    email:   this.email.value.trim(),
    subject: this.subject.value,
    budget:  this.budget.value,
    message: this.message.value.trim(),
  };

  try {
    const res  = await fetch('http://localhost:3000/api/contact', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(data),
    });
    const json = await res.json();
    if (json.success) {
      this.style.display = 'none';
      document.querySelector('.form-success').style.display = 'flex';
    } else {
      alert(json.error || 'Something went wrong.');
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }
  } catch {
    alert('Could not reach the server. Make sure it is running.');
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  }
});
