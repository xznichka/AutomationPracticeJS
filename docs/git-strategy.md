# Git Workflow Strategy

## Branching

- `main` — стабильная версия, готовая к релизу
- `develop` — активная разработка
- `feature/*` — отдельные фичи
- `bugfix/*` — багфиксы
- `hotfix/*` — критические исправления на проде

## Workflow

1. Ветки создаются от `develop`
2. Перед мержем — обязательно сделать Pull Request
3. PR должен быть одобрен минимум одним участником
4. `main` защищён: нельзя пушить напрямую