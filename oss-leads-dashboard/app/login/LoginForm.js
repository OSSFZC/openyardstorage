'use client';
import { useActionState } from 'react';
import { login } from './actions';
import { withBase } from '@/lib/base';

export default function LoginForm({ client }) {
  const [state, action, pending] = useActionState(login, null);
  return (
    <form className="auth-card" action={action} autoComplete="on">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="auth-logo" src={withBase('/oss-logo.png')} alt={client} />
      <h1>Sign in</h1>
      <p className="muted">Lead dashboard</p>
      {state?.error && <div className="alert alert-error">{state.error}</div>}
      <label>Username<input name="username" required autoFocus autoComplete="username" defaultValue={state?.username || ''} /></label>
      <label>Password<input type="password" name="password" required autoComplete="current-password" /></label>
      <button className="btn btn-primary btn-block" type="submit" disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button>
    </form>
  );
}
