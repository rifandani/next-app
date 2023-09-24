import { cookieApi } from '#shared/api/cookie.api';
import { GlobalNav } from '#shared/components/templates/global-nav';
import { LoadingSingleSkeleton } from '#shared/components/templates/loading-single-skeleton/index.client';
import { userApi } from '#user/api/user.api';

export default async function RootPage() {
  const appAuthCookie = cookieApi.getAppAuthCookie();
  const user = await userApi.getUser(appAuthCookie.id);

  // throw error will render nearest `error.tsx`
  if ('message' in user) {
    throw user.message;
  }

  return (
    <>
      <header className="flex w-full justify-between border-b p-4 shadow-lg">
        <GlobalNav.SidebarSheet />
        <GlobalNav.LogoLink />
        <GlobalNav.RoutesMenu />

        <section className="flex items-center space-x-4">
          <LoadingSingleSkeleton className="h-10 w-20 rounded-md">
            <GlobalNav.ThemePickerPopover />
          </LoadingSingleSkeleton>

          <GlobalNav.ProfilePopover user={user} />
        </section>
      </header>

      <main className="flex min-h-screen flex-col space-y-5 p-5">
        <h1>Home Page</h1>
      </main>
    </>
  );
}
