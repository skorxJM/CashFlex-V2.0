Atributo Escenario (Given/When/Then) Métrica /
Umbral Evidencia
Rendimiento
Given carga nominal, When usuario
registra un gasto, Then API responde en
2 s (p95).≤
p95 2s,≤
error ≤
1%
Pruebas con
k6/JMeter +
logs
Disponibilidad When horario normal de uso, Then
uptime 99% mensual.≥
99%≥
uptime
Monitor básico
(UptimeRobot)
Seguridad When acceso a endpoints protegidos,
Then exigir JWT válido.
100%
protegido
Checklist +
pruebas
Postman
Mantenibilidad When se agrega una categoría, Then el
cambio no rompe APIs existentes.
1 d/h≤
por
cambio
ADRs + registro
de cambios
Usabilidad
When usuario ingresa a dashboard,
Then logra visualizar balance en < 5
clics.
< 5
interaccio
nes
Pruebas de
usabilidad
Observabilidad
When se registran transacciones, Then
quedan logs trazables con ID de
usuario.
100%
eventos
críticos
Logs
estructurados +
muestreo
