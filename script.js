const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const toast = document.querySelector('#portal-toast');

const processContent = [
  {
    label: 'Navegación autónoma',
    title: 'El robot recorre rutas optimizadas',
    body: 'La plataforma se desplaza entre los racks, identifica el string asignado y coordina su misión con los demás robots de la planta.',
    meta: ['Ruta óptima', 'Posición en línea', 'Flota coordinada']
  },
  {
    label: 'Posicionamiento preciso',
    title: 'El sistema despliega el robot limpiador',
    body: 'Una vez alineada con el rack, la plataforma posiciona el equipo compacto sobre los módulos para iniciar el recorrido de forma controlada.',
    meta: ['Alineación controlada', 'Transferencia segura', 'Adaptación al rack']
  },
  {
    label: 'Limpieza coordinada',
    title: 'Ambos robots avanzan como un sistema',
    body: 'Los rodillos limpian el string mientras la base acompaña el movimiento, suministra agua dosificada y mantiene la comunicación.',
    meta: ['Rodillos de nylon', 'Agua dosificada', 'Movimiento sincronizado']
  },
  {
    label: 'Recarga autónoma',
    title: 'Agua distribuida y energía centralizada',
    body: 'El robot se conecta a estaciones de agua ubicadas estratégicamente y retorna a la estación eléctrica central cuando su misión lo requiere.',
    meta: ['Recarga de agua', 'Carga eléctrica', 'Continuidad operacional']
  },
  {
    label: 'Trazabilidad digital',
    title: 'Cada misión termina en información útil',
    body: 'El avance, los consumos, el estado del robot y los hallazgos quedan disponibles para monitoreo, análisis y reportabilidad.',
    meta: ['Histórico por rack', 'Indicadores operativos', 'Reportes descargables']
  }
];

const services = {
  thermography: {
    kicker: 'Inspección térmica',
    title: 'Termografía',
    description: 'Captura imágenes térmicas de los módulos durante el recorrido para identificar diferencias de temperatura y posibles puntos calientes.',
    benefit: 'Permite detectar fallas tempranas, priorizar mantenimiento predictivo y actuar antes de que una anomalía reduzca producción o escale.',
    outputs: ['Evidencia térmica', 'Ubicación del hallazgo', 'Severidad y prioridad']
  },
  soiling: {
    kicker: 'Rendimiento',
    title: 'Monitoreo de soiling',
    description: 'Estima el nivel y la distribución de suciedad utilizando imágenes, sensores y el historial operacional de cada sector.',
    benefit: 'Ayuda a limpiar donde la pérdida de energía realmente justifica el costo y alimenta el cálculo de la frecuencia económica óptima.',
    outputs: ['Mapa de suciedad', 'Tendencias por sector', 'Prioridades de limpieza']
  },
  vision: {
    kicker: 'Visión artificial',
    title: 'Inspección con IA',
    description: 'Analiza imágenes visuales o multiespectrales para reconocer módulos dañados, obstáculos, suciedad anormal y cambios de condición.',
    benefit: 'Aprovecha cada pasada del robot para inspeccionar, reduciendo recorridos separados y aumentando el valor obtenido por misión.',
    outputs: ['Imágenes de anomalías', 'Hallazgos georreferenciados', 'Historial de condición']
  },
  optimization: {
    kicker: 'Analítica económica',
    title: 'Optimización de frecuencia',
    description: 'Combina soiling, valor de la energía, costo de limpieza, producción esperada, logística y variables ambientales.',
    benefit: 'Recomienda cuándo y dónde limpiar para maximizar el margen operacional, en lugar de aplicar una frecuencia fija por calendario.',
    outputs: ['Frecuencia recomendada', 'Programa por sector', 'Escenarios económicos']
  }
};

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.process-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const index = Number(tab.dataset.step);
    const item = processContent[index];
    if (!item) return;

    document.querySelectorAll('.process-tab').forEach(button => {
      const isActive = button === tab;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });

    const copy = document.querySelector('.process-copy');
    if (copy) {
      copy.innerHTML = `<div class="process-label">${item.label}</div><h3>${item.title}</h3><p>${item.body}</p><div class="process-meta">${item.meta.map(value => `<span>${value}</span>`).join('')}</div>`;
    }

    const stageIndex = document.querySelector('.stage-index');
    if (stageIndex) stageIndex.textContent = String(index + 1).padStart(2, '0');
  });
});

let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4400);
}

document.querySelectorAll('[data-portal]').forEach(button => {
  button.addEventListener('click', () => {
    showToast('El portal de clientes se desarrollará como una aplicación separada y se conectará desde este acceso.');
  });
});

document.querySelector('[data-video]')?.addEventListener('click', () => {
  showToast('Este espacio está preparado para integrar el video de la operación logística cuando esté disponible.');
});

const dialog = document.querySelector('#service-dialog');
const dialogFields = {
  kicker: document.querySelector('#service-dialog-kicker'),
  title: document.querySelector('#service-dialog-title'),
  description: document.querySelector('#service-dialog-description'),
  benefit: document.querySelector('#service-dialog-benefit'),
  outputs: document.querySelector('#service-dialog-outputs')
};

document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    const service = services[button.dataset.service];
    if (!service || !dialog) return;
    dialogFields.kicker.textContent = service.kicker;
    dialogFields.title.textContent = service.title;
    dialogFields.description.textContent = service.description;
    dialogFields.benefit.textContent = service.benefit;
    dialogFields.outputs.innerHTML = service.outputs.map(item => `<b>${item}</b>`).join('');
    dialog.showModal();
  });
});

document.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog?.close());
document.querySelector('[data-dialog-contact]')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!inside) dialog.close();
});

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const required = [...form.querySelectorAll('[required]')];
  required.forEach(field => field.classList.toggle('invalid', !field.checkValidity()));
  const message = document.querySelector('#form-message');

  if (!form.checkValidity()) {
    message.textContent = 'Completa nombre, empresa y un correo válido.';
    required.find(field => !field.checkValidity())?.focus();
    return;
  }

  message.textContent = 'Solicitud preparada. Conectaremos el envío cuando definas el correo corporativo de destino.';
});
