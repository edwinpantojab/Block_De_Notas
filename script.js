const textareas = document.querySelector('textarea');

textareas.addEventListener('input', () => {
  localStorage.setItem('content', textareas.value);
});

window.addEventListener('load', () => {
  const content = localStorage.getItem('content');
  if (content) {
    textareas.value = content;
  }
});

const textarea = document.querySelector('textarea');
const saveBtn = document.querySelector('.save-btn');
const deleteBtn = document.querySelector('.delete-btn');

// Agregar evento de click al botón de guardar
saveBtn.addEventListener('click', () => {
  const content = textarea.value;
  // Guardar contenido en almacenamiento local
  localStorage.setItem('content', content);
  // Descargar archivo
  saveFile(content);
});

// Agregar evento de click al botón de eliminar
deleteBtn.addEventListener('click', () => {
  // Eliminar contenido de almacenamiento local
  localStorage.removeItem('content');
  // Limpiar caja de texto
  textarea.value = '';
});

// Método para guardar archivo y descargarlo en el PC
function saveFile(content) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'notepad.txt';
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
