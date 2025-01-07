document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('open-sidebar');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  const listItems = document.querySelectorAll('#sidebar a');
  const section = document.querySelector('section');

  toggleButton?.addEventListener('click', () => {
    sidebar?.classList.add('show-sidebar');
    section.style.display = 'none';
  });

  closeSidebar?.addEventListener('click', () => {
    sidebar?.classList.remove('show-sidebar');
    section.style.display = 'block';
  });

  listItems.forEach(item => {
    item.addEventListener('click', () => {
    sidebar?.classList.remove('show-sidebar');
    section.style.display = 'block';
    });
  });
});