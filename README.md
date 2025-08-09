## Barber Top

Aplicação web para agendamento em barbearias: encontre barbearias, visualize serviços e faça reservas online de forma simples.

**Produção**: [barber-top-blue.vercel.app](https://barber-top-blue.vercel.app)

### Funcionalidades

- **Explorar barbearias**: listagem com imagem, endereço e telefones.
- **Detalhes da barbearia**: descrição, serviços disponíveis e preços.
- **Agendamentos**: criar e listar reservas; cancelar quando aplicável.
- **Autenticação**: login com Google via NextAuth.
- **Busca**: filtro por nome/palavra-chave.
- **UI responsiva**: componentes acessíveis com Radix UI e Tailwind.

### Tecnologias

- **Next.js 14 (App Router)**, **React 18** e **TypeScript**
- **Tailwind CSS** + Radix UI
- **Prisma** com **PostgreSQL**
- **NextAuth** (Google OAuth)

### Estrutura de pastas

```txt
app/
  _actions/           # ações server para criar/deletar/listar agendamentos
  _components/        # componentes UI (itens de barbearia, serviço, etc.)
    ui/               # componentes base (button, card, dialog, form...)
  _constants/         # constantes de busca e afins
  _lib/               # auth, prisma client e utilitários
  _providers/         # provedores (ex.: AuthProvider)
  api/
    auth/[...nextauth]/route.ts  # rota NextAuth
  barbershops/        # páginas de listagem e detalhe de barbearias
  bookings/           # página de reservas do usuário
  layout.tsx          # layout raiz
  page.tsx            # página inicial

prisma/
  schema.prisma       # schema do banco (User, Barbershop, Service, Booking)
  migrations/         # migrações
  seed.ts             # dados de exemplo

public/               # assets estáticos
```
