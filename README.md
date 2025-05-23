# 📋 Dasavena TI – Sistema de Formulario de Recepción y Entrega de Equipos

Este proyecto permite gestionar la recepción, mantenimiento y entrega de equipos electrónicos mediante un formulario digital. Incluye un frontend desarrollado en React con TailwindCSS para la interfaz de usuario, y un backend en Laravel que expone una API RESTful conectada a una base de datos MySQL o SQLite.

A continuación se documenta la estructura y los principales componentes del código:

---

## 📁 Estructura del Proyecto

```
FormularioRecepcion/
├── frontend/           # Aplicación React (Vite, TailwindCSS)
│   ├── src/
│   │   ├── components/ # Componentes reutilizables (formularios, tablas, modales)
│   │   ├── pages/      # Vistas principales (Recepción, Entrega, Mantenimiento)
│   │   ├── services/   # Lógica de conexión con la API (axios, fetch)
│   │   └── App.jsx     # Componente raíz
│   └── public/
├── backend/            # API Laravel
│   ├── app/
│   │   ├── Http/Controllers/ # Controladores de la API (RecepcionController, EntregaController, etc.)
│   │   ├── Models/           # Modelos Eloquent (Equipo, Recepcion, Entrega)
│   ├── routes/api.php        # Definición de rutas de la API
│   └── database/migrations/  # Migraciones de base de datos
└── README.md           # Documentación principal
```

---

## 📝 Descripción de Componentes Clave

### Frontend (React)
- **components/FormularioRecepcion.jsx**: Formulario para registrar la recepción de equipos.
- **components/FormularioEntrega.jsx**: Formulario para registrar la entrega de equipos.
- **components/TablaEquipos.jsx**: Tabla para visualizar el estado y detalles de los equipos.
- **services/api.js**: Funciones para interactuar con la API (obtener, crear, actualizar registros).

### Backend (Laravel)
- **Controllers**: Gestionan las solicitudes HTTP para recepción, mantenimiento y entrega.
- **Models**: Representan las entidades principales (Equipo, Recepcion, Entrega).
- **Migrations**: Definen la estructura de las tablas en la base de datos.
- **Routes**: Rutas RESTful para operaciones CRUD sobre los equipos.

---

## 🔄 Flujo de Trabajo

1. **Recepción**: El usuario registra un equipo recibido mediante el formulario. Los datos se envían al backend y se almacenan en la base de datos.
2. **Mantenimiento**: Se actualiza el estado del equipo según el proceso de mantenimiento.
3. **Entrega**: Al finalizar, se registra la entrega del equipo al cliente.

---

## 🛠️ Buenas Prácticas

- Código modular y reutilizable en el frontend.
- Validación de datos tanto en frontend como en backend.
- Uso de controladores y modelos en Laravel para separar lógica de negocio y acceso a datos.
- Documentación y pruebas automatizadas para asegurar calidad y mantenibilidad.

---

Para más detalles, consulta los archivos fuente y la documentación adicional en la carpeta `/docs`.
