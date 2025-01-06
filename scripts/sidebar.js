document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('open-sidebar');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  const listItems = document.querySelectorAll('#sidebar a');

  toggleButton?.addEventListener('click', () => {
  sidebar?.classList.add('show-sidebar');
  });

  closeSidebar?.addEventListener('click', () => {
  sidebar?.classList.remove('show-sidebar');
  });

  listItems.forEach(item => {
item.addEventListener('click', () => {
sidebar?.classList.remove('show-sidebar');
});
});
});