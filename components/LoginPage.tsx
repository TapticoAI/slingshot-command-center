'use client';
import { useState } from 'react';

interface LoginPageProps { onLogin: () => void; }

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        onLogin();
      } else {
        setAttempts(a => a + 1);
        setError('Access denied. Invalid credentials.');
        setPassword('');
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    } catch {
      setError('Connection failed. Retry.');
    } finally {
      setIsLoading(false);
    }
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');

    @keyframes orb1 {
      0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(60px,-40px) scale(1.1)} 66%{transform:translate(-30px,30px) scale(0.9)}
    }
    @keyframes orb2 {
      0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-80px,50px) scale(0.95)} 66%{transform:translate(40px,-60px) scale(1.05)}
    }
    @keyframes orb3 {
      0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(50px,70px) scale(1.08)}
    }
    @keyframes fadeUp {
      from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)}
    }
    @keyframes scan {
      0%{top:-2px} 100%{top:100%}
    }
    @keyframes shake {
      0%,100%{transform:translateX(0)} 10%,30%,50%,70%,90%{transform:translateX(-6px)} 20%,40%,60%,80%{transform:translateX(6px)}
    }
    @keyframes blink {
      0%,100%{opacity:1} 50%{opacity:0.3}
    }
    @keyframes logoIn {
      from{opacity:0;letter-spacing:0.5em} to{opacity:1;letter-spacing:-0.5px}
    }

    *{box-sizing:border-box;margin:0;padding:0}

    .lc{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;position:relative;overflow:hidden;background:#030314}
    .bg{position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(13,13,74,0.95) 0%,transparent 55%),radial-gradient(ellipse at 70% 80%,rgba(10,10,58,0.9) 0%,transparent 55%),#030314;z-index:0}
    .orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:1}
    .o1{width:500px;height:500px;background:radial-gradient(circle,rgba(44,62,140,0.28) 0%,transparent 70%);top:-100px;left:-100px;animation:orb1 18s ease-in-out infinite}
    .o2{width:600px;height:600px;background:radial-gradient(circle,rgba(26,26,110,0.22) 0%,transparent 70%);bottom:-150px;right:-150px;animation:orb2 22s ease-in-out infinite}
    .o3{width:320px;height:320px;background:radial-gradient(circle,rgba(123,140,222,0.12) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);animation:orb3 14s ease-in-out infinite}
    .grid{position:absolute;inset:0;background-image:linear-gradient(rgba(123,140,222,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(123,140,222,0.04) 1px,transparent 1px);background-size:60px 60px;z-index:2;pointer-events:none}
    .scanline{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(123,140,222,0.07),transparent);z-index:4;animation:scan 8s linear infinite;pointer-events:none}

    .wrap{position:relative;z-index:10;width:100%;max-width:440px;animation:fadeUp 0.8s ease-out forwards}

    .card{background:rgba(255,255,255,0.03);border:1px solid rgba(123,140,222,0.14);border-radius:24px;padding:52px 44px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);position:relative;overflow:hidden}
    .card::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(123,140,222,0.55),transparent);pointer-events:none}

    .c{position:absolute;width:18px;height:18px;opacity:0.45}
    .c-tl{top:18px;left:18px;border-top:1.5px solid rgba(123,140,222,0.8);border-left:1.5px solid rgba(123,140,222,0.8);border-radius:2px 0 0 0}
    .c-tr{top:18px;right:18px;border-top:1.5px solid rgba(123,140,222,0.8);border-right:1.5px solid rgba(123,140,222,0.8);border-radius:0 2px 0 0}
    .c-bl{bottom:18px;left:18px;border-bottom:1.5px solid rgba(123,140,222,0.8);border-left:1.5px solid rgba(123,140,222,0.8);border-radius:0 0 0 2px}
    .c-br{bottom:18px;right:18px;border-bottom:1.5px solid rgba(123,140,222,0.8);border-right:1.5px solid rgba(123,140,222,0.8);border-radius:0 0 2px 0}

    .wm{text-align:center;margin-bottom:32px}
    .logo{font-size:38px;font-weight:900;color:#fff;letter-spacing:-0.5px;line-height:1;animation:logoIn 1s ease-out 0.2s both}
    .logo-dot{color:#7b8cde}
    .logo-sub{font-size:10px;font-weight:600;letter-spacing:0.38em;text-transform:uppercase;color:rgba(123,140,222,0.55);margin-top:7px}

    .div{width:36px;height:1px;background:linear-gradient(90deg,transparent,rgba(123,140,222,0.45),transparent);margin:22px auto}

    .title{text-align:center;margin-bottom:32px}
    .t-main{font-size:19px;font-weight:800;color:#fff;letter-spacing:-0.3px;line-height:1.25;margin-bottom:9px}
    .t-sub{font-size:10px;font-weight:600;letter-spacing:0.32em;text-transform:uppercase;color:rgba(168,180,232,0.45)}

    .sr{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:30px}
    .sdot{width:7px;height:7px;border-radius:50%;background:#2ecc71;animation:blink 2s ease-in-out infinite;box-shadow:0 0 8px rgba(46,204,113,0.65);flex-shrink:0}
    .stxt{font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:rgba(46,204,113,0.8)}

    .lbl{display:block;font-size:10px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:rgba(168,180,232,0.55);margin-bottom:10px}

    .iw{position:relative;margin-bottom:14px}
    .iw.shk{animation:shake 0.5s ease-in-out}

    .inp{width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(123,140,222,0.22);border-radius:12px;padding:16px 48px 16px 18px;color:#fff;font-size:15px;font-family:'Inter',sans-serif;outline:none;transition:all 0.25s ease;letter-spacing:0.08em}
    .inp::placeholder{color:rgba(255,255,255,0.16);letter-spacing:0.3em;font-size:13px}
    .inp:focus{border-color:rgba(44,62,140,0.95);background:rgba(255,255,255,0.06);box-shadow:0 0 0 1px rgba(44,62,140,0.5),0 0 22px rgba(44,62,140,0.32),0 0 44px rgba(44,62,140,0.14),inset 0 1px 0 rgba(255,255,255,0.04)}
    .inp.err{border-color:rgba(231,76,60,0.5);box-shadow:0 0 0 1px rgba(231,76,60,0.28),0 0 16px rgba(231,76,60,0.14)}

    .iico{position:absolute;right:16px;top:50%;transform:translateY(-50%);color:rgba(123,140,222,0.38);pointer-events:none;font-size:14px;line-height:1}

    .emsg{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:500;color:rgba(231,76,60,0.9);margin-bottom:14px;padding:10px 14px;background:rgba(231,76,60,0.08);border:1px solid rgba(231,76,60,0.18);border-radius:8px;animation:fadeUp 0.3s ease-out}

    .btn{width:100%;background:linear-gradient(135deg,#1a1a6e 0%,#2c3e8c 50%,#3d52a0 100%);border:1px solid rgba(123,140,222,0.38);border-radius:12px;padding:16px;color:#fff;font-size:12px;font-weight:700;font-family:'Inter',sans-serif;letter-spacing:0.18em;text-transform:uppercase;cursor:pointer;transition:all 0.25s ease;position:relative;overflow:hidden}
    .btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(123,140,222,0.18),transparent);opacity:0;transition:opacity 0.25s ease}
    .btn:hover:not(:disabled){transform:translateY(-1px) scale(1.01);border-color:rgba(123,140,222,0.65);box-shadow:0 8px 28px rgba(44,62,140,0.52),0 0 42px rgba(44,62,140,0.24),inset 0 1px 0 rgba(255,255,255,0.08)}
    .btn:hover:not(:disabled)::before{opacity:1}
    .btn:active:not(:disabled){transform:translateY(0) scale(0.99)}
    .btn:disabled{opacity:0.38;cursor:not-allowed}

    .stats{display:flex;justify-content:center;margin-top:34px;padding-top:26px;border-top:1px solid rgba(255,255,255,0.05)}
    .stat{text-align:center;flex:1;position:relative}
    .stat+.stat::before{content:'';position:absolute;left:0;top:20%;height:60%;width:1px;background:rgba(255,255,255,0.06)}
    .sn{display:block;font-size:20px;font-weight:800;color:rgba(255,255,255,0.88);line-height:1}
    .sl{display:block;font-size:9px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-top:5px}

    .foot{text-align:center;margin-top:22px;font-size:10px;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.13)}

    @media(max-width:480px){
      .card{padding:38px 26px}
      .logo{font-size:32px}
      .t-main{font-size:16px}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="lc">
        <div className="bg" />
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <div className="grid" />
        <div className="scanline" />

        <div className="wrap">
          <div className="card">
            <div className="c c-tl" />
            <div className="c c-tr" />
            <div className="c c-bl" />
            <div className="c c-br" />

            <div className="wm">
              <img src="/taptico-logo-white.png" alt="Taptico" style={{height:'56px',width:'auto',objectFit:'contain',animation:'logoIn 1s ease-out 0.2s both',filter:'drop-shadow(0 0 18px rgba(123,140,222,0.45))'}} />
              <div className="logo-sub" style={{marginTop:'10px'}}>AI Operations Platform</div>
            </div>

            <div className="div" />

            <div className="title">
              <div className="t-main">Slingshot Command Center</div>
              <div className="t-sub">Authorized Personnel Only</div>
            </div>

            <div className="sr">
              <div className="sdot" />
              <div className="stxt">Systems Online &middot; 60+ Agents Active</div>
            </div>

            <form onSubmit={handleSubmit}>
              <label className="lbl" htmlFor="pw-field">Access Credential</label>
              <div className={`iw${shake ? ' shk' : ''}`}>
                <input
                  id="pw-field"
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (error) setError(''); }}
                  placeholder="••••••••••••"
                  required
                  autoComplete="current-password"
                  className={`inp${error ? ' err' : ''}`}
                />
                <div className="iico">
                  {isLoading ? '↻' : error ? '⚠' : '◈'}
                </div>
              </div>

              {error && (
                <div className="emsg">
                  <span>⊘</span>
                  <span>{error}{attempts >= 2 ? ` (${attempts} failed attempts)` : ''}</span>
                </div>
              )}

              <button type="submit" disabled={isLoading || !password} className="btn">
                {isLoading ? '↻  Authenticating...' : '⚡  Initiate Access'}
              </button>
            </form>

            <div className="stats">
              {([['60+','AI Agents'],['24/7','Always On'],['17+','Skills'],['8','SOPs']] as [string,string][]).map(([n,l]) => (
                <div key={l} className="stat">
                  <span className="sn">{n}</span>
                  <span className="sl">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="foot">
            Taptico &nbsp;&middot;&nbsp; April 2026 &nbsp;&middot;&nbsp; guide.taptico.com
          </div>
        </div>
      </div>
    </>
  );
}
