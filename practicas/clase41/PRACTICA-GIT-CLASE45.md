# Práctica Git - Clase 45

## 1. Git Stash

Comando utilizado:

git stash

Resultado:

Los cambios temporales fueron almacenados sin generar un commit.

Aprendizaje:

Git stash permite guardar cambios temporalmente para cambiar de contexto o actualizar ramas sin perder trabajo.

---

## 2. Fast-Forward Merge

Concepto:

Ocurre cuando una rama puede avanzar directamente porque no existen cambios paralelos que generen divergencia.

Aprendizaje:

Es la forma más simple de integración y mantiene un historial lineal.

---

## 3. No Fast-Forward Merge

Concepto:

Se utiliza para conservar explícitamente el historial de integración entre ramas mediante un commit adicional de merge.

Aprendizaje:

Permite visualizar claramente cuándo una funcionalidad fue integrada al proyecto.

---

## 4. Conflictos de Merge

Concepto:

Un conflicto ocurre cuando dos ramas modifican la misma parte de un archivo y Git no puede decidir cuál versión conservar.

Aprendizaje:

Los conflictos deben resolverse manualmente revisando los cambios y seleccionando la versión correcta.

---

## 5. Buenas prácticas aprendidas

* Revisar git status antes de hacer commit.
* Utilizar ramas para aislar cambios.
* Proteger archivos sensibles mediante .gitignore.
* Documentar cambios importantes.
* Resolver conflictos cuidadosamente antes de publicar.
