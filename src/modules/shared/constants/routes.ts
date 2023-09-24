export const private_routes = ['/', '/todos'] as const;
export const public_routes = ['/login'] as const; // also '/playground'

export const home_routes = {
  root: '/',
} as const;

export const todo_routes = {
  root: '/todos',
  detail: '/todos/:id',
} as const;

export const auth_routes = {
  login: '/login',
} as const;
