// Lógica para mostrar el popup y cargar archivos
document.getElementById('openPopupButton').addEventListener('click', () => {
    popup.style.display = 'block';
    document.getElementById('attachment').click();
});

// Maneja el evento de cambio en el input de archivos
document.getElementById('attachment').addEventListener('change', (e) => {
    handleFileInputChange(e);
});

// Función para manejar el cambio en el input de archivos
function handleFileInputChange(e) {
    const files = e.target.files;
    const uploadedFilesContainer = document.getElementById('uploaded-files-container');
    const dragDropText = document.querySelector('.drag-drop-text');

    if (files.length > 0) {
        // Lógica para mostrar los archivos cargados en el contenedor
        uploadedFilesContainer.innerHTML = '';
        dragDropText.textContent = `${files.length} archivo(s) seleccionado(s)`;

        for (const file of files) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <span>${file.name}</span>
                <button class="remove-file">Eliminar</button>
            `;

            const removeButton = fileItem.querySelector('.remove-file');
            removeButton.addEventListener('click', () => {
                uploadedFilesContainer.removeChild(fileItem);
            });

            uploadedFilesContainer.appendChild(fileItem);
        }
    } else {
        // Lógica cuando no se seleccionan archivos
        dragDropText.textContent = 'Arrastra y suelta los archivos aquí';
        uploadedFilesContainer.innerHTML = ''; // Limpiamos el contenedor
    }
}

// Resto del código para el drag and drop y otros eventos ...

const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const fileInput = document.getElementById('attachment');
const uploadedFilesContainer = document.getElementById('uploaded-files-container'); // Nuevo
const dragDropText = document.querySelector('.drag-drop-text');

popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

fileInput.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragDropText.textContent = 'Suelta los archivos aquí';
});

fileInput.addEventListener('dragleave', () => {
    dragDropText.textContent = 'Arrastra y suelta los archivos aquí';
});