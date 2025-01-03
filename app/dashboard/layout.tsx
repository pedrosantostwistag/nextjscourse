import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';
export const experimental_ppr = true;
 

// Next will add this title and description automatically to the page
// We use a template, so what is passed to the title on child components will be appended to the template
export const metadata: Metadata = {
  title: {
    template: '%s | Mega Dashboard',
    default: 'Mega Dashboard',
  },
  description: 'Super Dashboard with one bug or two',
  metadataBase: new URL('https://thisLinkDoesNotExist.sh'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}