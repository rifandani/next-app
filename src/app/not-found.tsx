import { GlobalNav } from '#/modules/shared/components/templates/global-nav';
import { LoadingSingleSkeleton } from '#/modules/shared/components/templates/loading-single-skeleton/index.client';
import { Boundary } from '#shared/components/molecules/boundary';

export default function RootNotFound() {
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
        </section>
      </header>

      <Boundary
        className="mx-5 mt-10"
        size="small"
        labels={['./not-found.tsx']}
        color="primary"
      >
        <div className="space-y-4 text-primary">
          <h2 className="text-lg font-bold">Not Found</h2>

          <p className="text-sm">Could not find requested resource</p>
        </div>
      </Boundary>
    </>
  );
}
