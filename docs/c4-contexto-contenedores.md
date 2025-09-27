Contexto:
 Usuario final (persona que gestiona sus finanzas).
 Sistema: CashFlex (Web/App).
 Externos: Servicio email (para notificaciones opcionales), API de exportación
(CSV/PDF).
Contenedores:
 Frontend (HTML + Tailwind + JS): vistas de login, dashboard, CRUD de
transacciones.
 Backend (Django REST): API de usuarios, transacciones, categorías.
 Base de datos (PostgreSQL): tablas normalizadas (usuarios, transacciones,
categorías).
 Infraestructura: logs básicos, endpoint /health
