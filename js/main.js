// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });

  // Đóng menu khi click vào link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.textContent = '☰';
    });
  });
}

// ===== FORM SUBMIT (Formspree) =====
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Đang gửi...';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        alert('✅ Cảm ơn bạn! Yêu cầu đã được gửi. Chúng tôi sẽ liên hệ trong 15 phút.');
        form.reset();
      } else {
        alert('❌ Có lỗi xảy ra. Vui lòng gọi hotline 0986 633 732.');
      }
    } catch (err) {
      alert('❌ Không gửi được. Vui lòng gọi hotline 0986 633 732.');
    }

    btn.textContent = originalText;
    btn.disabled = false;
  });
}
