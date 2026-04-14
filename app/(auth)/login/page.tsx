export default function LoginPage() {
  return (
    <main className="min-h-screen mindco-app-shell text-[#F5F7FF] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#1A1A1A] p-8 shadow-2xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#2EC4B6]">MindCo</p>
          <h1 className="mt-3 text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-white/60">Sign in to access the MindCo workplace mockup.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="name@mindco.com"
              className="w-full rounded-2xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm outline-none placeholder:text-white/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-2xl border border-[rgba(129,157,255,0.14)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm outline-none placeholder:text-white/30"
            />
          </div>

          <a
            href="/home"
            className="flex w-full items-center justify-center rounded-2xl bg-[#6675ff] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Sign in
          </a>
        </form>
      </div>
    </main>
  );
}
