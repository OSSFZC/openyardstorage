import { requireSession } from '@/lib/session';
import { CLIENT_NAME } from '@/lib/config';
import Shell from './Shell';

export const dynamic = 'force-dynamic';

export default async function AppLayout({ children }) {
  await requireSession();
  return <Shell client={CLIENT_NAME}>{children}</Shell>;
}
