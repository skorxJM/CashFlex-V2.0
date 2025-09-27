# CashFlex-V2.0
# 💸 CashFlex — Primer Entregable

**Universidad Cooperativa de Colombia · Ingeniería de Sistemas**  
Proyecto académico para la asignatura de Arquitectura de Software.  

---

## 🎯 Criterio de éxito del MVP
Un usuario debe poder:
1. Registrarse e iniciar sesión.
2. Registrar ingresos y gastos con categoría.
3. Visualizar su balance y resumen en gráficos.
4. Exportar datos básicos a CSV.

Todo en menos de **2 minutos de interacción**, con respuesta de la API en ≤ 2s (p95).

---

## 📂 Mapa de documentación

La documentación inicial se encuentra organizada en la carpeta [`docs/`](docs/) y las decisiones arquitectónicas en [`adr/`](adr/).

- `docs/01-vision-alcance.md` → Acta de visión y alcance.  
- `docs/02-nfrs.md` → Catálogo de requerimientos no funcionales.  
- `docs/03-c4-contexto-contenedores.md` → Diseño C4 (contexto y contenedores).  
- `docs/04-backlog.md` → Backlog inicial con historias INVEST.  

- `adr/ADR-000-monolito-django-postgres.md` → Decisión arquitectónica inicial.

---

## 🗂️ Estructura de carpetas

```bash
CashFlex/
├── adr/
│   └── ADR-000-monolito-django-postgres.md
├── docs/
│   ├── 01-vision-alcance.md
│   ├── 02-nfrs.md
│   ├── 03-c4-contexto-contenedores.md
│   └── 04-backlog.md
├── README.md
└── .gitignore

