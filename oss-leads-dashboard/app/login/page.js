import { CLIENT_NAME } from '@/lib/config';
import LoginForm from './LoginForm';

export const metadata = { title: 'Sign in' };

export default function LoginPage() {
  return (
    <div className="auth">
      <div className="auth-wrap">
        <LoginForm client={CLIENT_NAME} />
      </div>
    </div>
  );
}
