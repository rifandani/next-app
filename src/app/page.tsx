import { envSchema } from '#shared/api/env.schema';

export default async function RootPage() {
  const env = envSchema.parse(process.env);
  const response = await fetch(
    `${env.X_URL}/api/v1/customers/${env.X_NUMBER}/points`,
    {
      cache: 'no-store',
      headers: {
        'X-Auth-API-Secret-Key': env.X_KEY,
      },
    },
  );

  // 403 -> gaada header 'X-Auth-API-Secret-Key' -> "Invalid Headers"
  // 404 -> fetch failed (salah nomer) -> "Customer Not Found"
  // 404 -> fetch failed (URL salah / VPN not connected)

  if (response.status === 403) {
    throw new Error('Invalid Headers');
  } else if (response.status === 404) {
    throw new Error('Customer Not Found');
  }

  const points = await response.json();

  return (
    <main className="flex min-h-screen flex-col space-y-5 p-5">
      <pre>{JSON.stringify(points, null, 2)}</pre>
    </main>
  );
}
