const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const fileInput = document.getElementById('attachment');
const dragDropText = document.querySelector('.drag-drop-text');
const uploadedFilesContainer = document.getElementById('uploaded-files-container'); // Nuevo

popupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        dragDropText.textContent = `${files.length} archivo(s) seleccionado(s)`;

        // Limpiamos el contenedor de archivos cargados
        uploadedFilesContainer.innerHTML = '';

        // Mostramos los archivos y opción de eliminar
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
        dragDropText.textContent = 'Arrastra y suelta los archivos aquí';
        uploadedFilesContainer.innerHTML = ''; // Limpiamos el contenedor
    }
});

fileInput.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragDropText.textContent = 'Suelta los archivos aquí';
});

fileInput.addEventListener('dragleave', () => {
    dragDropText.textContent = 'Arrastra y suelta los archivos aquí';
});