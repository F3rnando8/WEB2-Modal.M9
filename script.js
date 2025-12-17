// Elementos del DOM
const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const body = document.body;

/**
 * Abrir un modal
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (modal) {
        modal.classList.add('active');
        body.classList.add('modal-open');
        console.log(`Modal abierto: ${modalId}`);
    }
}

/**
 * Cerrar un modal
 */
function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        body.classList.remove('modal-open');
        console.log('Modal cerrado');
    }
}

/**
 * Cerrar todos los modales
 */
function closeAllModals() {
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    body.classList.remove('modal-open');
}

// Event listeners para abrir modales
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.dataset.modal;
        openModal(modalId);
    });
});

// Event listeners para cerrar modales
modals.forEach(modal => {
    // Botón de cerrar (X)
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal(modal);
        });
    }
    
    // Botón de cancelar (si existe)
    const cancelBtn = modal.querySelector('.cancel-btn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            closeModal(modal);
        });
    }
    
    // Click en el overlay (fuera del contenido)
    const overlay = modal.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeModal(modal);
        });
    }
    
    // Prevenir que el click en el contenido cierre el modal
    const content = modal.querySelector('.modal-content');
    if (content) {
        content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Prevenir envío del formulario en Modal 1
const modalForm = document.querySelector('#modal1 .modal-form');
if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Formulario enviado con éxito!');
        closeAllModals();
        modalForm.reset();
    });
}

// Confirmar acción en Modal 2
const confirmBtn = document.querySelector('#modal2 .btn-success');
if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
        alert('¡Acción confirmada bajo entorno seguro!');
        closeAllModals();
    });
}

// Click en imágenes de la galería (Modal 4)
const galleryImages = document.querySelectorAll('#modal4 .gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        alert(`Vista previa de: ${img.alt}`);
    });
});

// Log de inicio
console.log('Sistema de modales modernizado (Ice & Blue Theme)');
console.log(`Total de modales cargados: ${modals.length}`);