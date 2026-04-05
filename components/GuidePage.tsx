'use client';
import agents from '@/data/agents.json';
import skills from '@/data/skills.json';
import sops from '@/data/sops.json';

const N = '#1a1a6e';
const R = '#2c3e8c';
const H = '#7b8cde';
const CB = '#f8f9ff';
const M = '#5a5a7a';
const BD = '#e8eaf6';

function SH({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'14px', marginBottom:'28px', paddingBottom:'16px', borderBottom:`2px solid ${BD}` }}>
      <div style={{ width:'36px', height:'36px', background:`linear-gradient(135deg,${N},${R})`, color:'white', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', fontWeight:'800', flexShrink:0 }}>{n}</div>
      <div>
        <div style={{ fontSize:'22px', fontWeight:'800', color:N }}>{title}</div>
        <div style={{ fontSize:'13px', color:M, marginTop:'2px' }}>{desc}</div>
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <div style={{ fontFamily:"Inter,-apple-system,BlinkMacSystemFont,sans-serif", background:'#fff', color:'#1a1a2e', lineHeight:'1.6', fontSize:'14px' }}>

      {/* HEADER */}
      <div style={{ background:'linear-gradient(135deg,#0d0d4a 0%,#1a1a6e 30%,#2c3e8c 65%,#3d52a0 100%)', padding:'60px 60px 50px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'relative', zIndex:1, display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div>
            <div style={{ display:'inline-block', background:'rgba(123,140,222,0.2)', border:'1px solid rgba(123,140,222,0.4)', color:'#a8b4e8', fontSize:'11px', fontWeight:'600', letterSpacing:'2px', textTransform:'uppercase', padding:'5px 14px', borderRadius:'20px', marginBottom:'20px' }}>
              Official Field Manual &middot; April 2026
            </div>
            <h1 style={{ fontSize:'42px', fontWeight:'900', color:'#fff', lineHeight:'1.1', marginBottom:'8px', letterSpacing:'-0.5px' }}>
              Slingshot Command Center
            </h1>
            <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.7)', marginBottom:'28px' }}>
              Your complete guide to Taptico&apos;s AI-powered mission control on Discord
            </p>
            <div style={{ display:'flex', gap:'24px' }}>
              {([['60+','AI Agents'],['24/7','Always On'],['17+','Skills Installed'],['8','SOPs']] as [string,string][]).map(([n,l]) => (
                <div key={l}>
                  <span style={{ display:'block', fontSize:'28px', fontWeight:'800', color:'#fff', lineHeight:'1' }}>{n}</span>
                  <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'1px', marginTop:'4px', display:'block' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div style={{ fontSize:'22px', fontWeight:'800', color:'rgba(255,255,255,0.9)' }}>Taptico<span style={{ color:'#7b8cde' }}>.</span></div>
            <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.4)', marginTop:'6px' }}>Version 1.0 &middot; April 2026<br />Internal Use Only</div>
          </div>
        </div>
      </div>

      {/* NAV */}
      <div style={{ background:N, padding:'0 60px', display:'flex', borderBottom:'2px solid rgba(123,140,222,0.2)', flexWrap:'wrap' }}>
        {['01 · Welcome','02 · Channels','03 · Agents','04 · The Squad','05 · Skills','06 · Prompts','07 · SOPs','08 · Comms','09 · Quick Ref'].map(item => (
          <div key={item} style={{ padding:'14px 16px', color:'rgba(255,255,255,0.55)', fontSize:'11px', fontWeight:'600', letterSpacing:'0.5px', textTransform:'uppercase' }}>{item}</div>
        ))}
      </div>

      {/* MAIN */}
      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'50px 40px 80px' }}>

        {/* 01 WELCOME */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="01" title="Welcome to Mission Control" desc="What is the Slingshot Squad Discord and why it matters" />
          <div style={{ background:'linear-gradient(135deg,#f0f2ff 0%,#e8eaf6 100%)', border:`1px solid ${BD}`, borderRadius:'16px', padding:'36px 40px', marginBottom:'24px' }}>
            <h2 style={{ fontSize:'24px', fontWeight:'800', color:N, marginBottom:'12px' }}>This is where the work actually happens. 🚀</h2>
            <p style={{ fontSize:'14px', color:M, lineHeight:'1.7', maxWidth:'700px' }}>
              The Slingshot Squad Discord is Taptico&apos;s nerve center. Every AI agent on the roster — over 60 of them — is available here around the clock, ready to execute on anything from competitive research to cold email sequences to full client proposals. No scheduling. No waiting. Just ask.
            </p>
            <p style={{ fontSize:'14px', color:M, lineHeight:'1.7', maxWidth:'700px', marginTop:'12px' }}>
              Think of it as having a Fortune 500 marketing department, a law firm, a dev team, a research shop, and a creative agency all in one server — each staffed by specialists who never sleep, never have bad days, and never charge by the hour.
            </p>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:N, color:'white', fontSize:'12px', fontWeight:'600', padding:'5px 14px', borderRadius:'20px', marginTop:'16px' }}>
              🤖 Bo is your default entry point — he routes everything to the right agent
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'16px' }}>
            {([
              ['🎙️','Talk Naturally','No commands. No syntax. Just say what you need in plain English. Agents understand context, intent, and nuance.'],
              ['🤖','Bo Routes Everything',"Tag @Bo with any request. He's the Chief Agent Officer — routing to the right Slingshot every time."],
              ['⚡','24/7 Operations','Every agent is always on. Heartbeat checks run every 60 minutes. The squad is working when you are.'],
              ['🏆','Fortune 500 Firepower','Enterprise-level intelligence, execution speed, and strategic depth. This is what Taptico was built to deliver.'],
            ] as [string,string,string][]).map(([ico,title,desc]) => (
              <div key={title} style={{ background:CB, border:`1px solid ${BD}`, borderRadius:'14px', padding:'28px 30px' }}>
                <h3 style={{ fontSize:'15px', fontWeight:'700', color:N, marginBottom:'10px' }}>{ico} {title}</h3>
                <p style={{ fontSize:'13px', color:M, lineHeight:'1.65' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 02 CHANNELS */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="02" title="Channel Structure & Purpose" desc="Where to go for what — the right channel makes the right agent faster" />
          <div style={{ display:'flex', gap:'14px', padding:'18px 22px', borderRadius:'12px', marginBottom:'16px', background:'rgba(123,140,222,0.08)', border:'1px solid rgba(123,140,222,0.25)' }}>
            <div style={{ fontSize:'20px', flexShrink:0 }}>💡</div>
            <div>
              <div style={{ fontSize:'13px', fontWeight:'700', color:N, marginBottom:'4px' }}>Pro Tip: #war-room is home base</div>
              <div style={{ fontSize:'13px', color:M, lineHeight:'1.55' }}>When in doubt, drop it in #war-room. Bo monitors it and will route you to the right channel or agent. Never sit on something waiting to figure out where it goes.</div>
            </div>
          </div>
          {([
            ['war-room','The main stage. Strategic decisions, fires, squad-wide alignment, and anything that needs a decision NOW. Bo lives here.','🔴 Priority','#e74c3c','rgba(231,76,60,0.1)'],
            ['new-builds','Active build tracking — new features, new skills, new systems. Drop blockers, share progress, coordinate agents.','🔧 Builds','#27ae60','rgba(46,204,113,0.1)'],
            ['announcements','Squad-wide updates, new agent launches, major milestones. Check here before asking if something changed.','📢 Squad',R,'rgba(123,140,222,0.12)'],
            ['averso-feed',"Dedicated to Andrew Averso's tasks and creative collaboration. Campaign requests, reviews, project updates.",'👤 Personal','#27ae60','rgba(46,204,113,0.1)'],
            ['nick-feed',"Nick's personal channel. Personal updates, intel drops, and strategic thinking. Where ideas land before becoming missions.",'⭐ Nick','#27ae60','rgba(46,204,113,0.1)'],
            ['ai-intel','Daily AI news and competitive intelligence from Cipher. New tools, industry moves, competitor signals. Check this daily.','🔑 Intel','#9b59b6','rgba(155,89,182,0.1)'],
            ['nate','n8n automation work. Workflow builds, integration logic, API connections, and automation architecture.','⚙️ Auto',R,'rgba(123,140,222,0.12)'],
          ] as [string,string,string,string,string][]).map(([name,desc,tag,tc,bg]) => (
            <div key={name} style={{ display:'flex', alignItems:'flex-start', gap:'16px', padding:'18px 22px', background:CB, border:`1px solid ${BD}`, borderRadius:'12px', marginBottom:'10px' }}>
              <div style={{ fontSize:'18px', fontWeight:'800', color:H, flexShrink:0, width:'20px', marginTop:'1px' }}>#</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:'14px', fontWeight:'700', color:N, fontFamily:'monospace', marginBottom:'4px' }}>{name}</div>
                <div style={{ fontSize:'13px', color:M, lineHeight:'1.5' }}>{desc}</div>
              </div>
              <div style={{ flexShrink:0, background:bg, color:tc, fontSize:'10px', fontWeight:'700', padding:'4px 10px', borderRadius:'6px', textTransform:'uppercase', whiteSpace:'nowrap', alignSelf:'flex-start' }}>{tag}</div>
            </div>
          ))}
        </div>

        {/* 03 HOW TO TALK */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="03" title="How to Talk to Agents" desc="Three ways in — all of them work. Pick what feels natural." />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px' }}>
            {([
              ['1','Just Type Naturally','Drop your request in #war-room or your personal channel. No commands, no special syntax. Bo reads everything.','"I need a competitor analysis on Salesforce for the Q2 deck"'],
              ['2','Tag @Bo Directly','For orchestration requests, complex multi-step tasks, or when you want Bo personally on it — tag him.','"@Bo I need a proposal for La-Z-Boy — brief incoming"'],
              ['3','Request a Specific Agent','If you know who you want, just say it. Bo will spawn them or connect you directly.','"I want to talk to Sunny about campaign strategy"'],
            ] as [string,string,string,string][]).map(([n,title,desc,ex]) => (
              <div key={n} style={{ background:CB, border:`1px solid ${BD}`, borderRadius:'14px', padding:'24px 22px', textAlign:'center' }}>
                <div style={{ width:'42px', height:'42px', background:`linear-gradient(135deg,${N},${R})`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', fontWeight:'900', color:'white', margin:'0 auto 14px' }}>{n}</div>
                <h4 style={{ fontSize:'14px', fontWeight:'700', color:N, marginBottom:'8px' }}>{title}</h4>
                <p style={{ fontSize:'12.5px', color:M, lineHeight:'1.55' }}>{desc}</p>
                <div style={{ marginTop:'12px', background:N, color:'#e0e4ff', fontFamily:'monospace', fontSize:'11px', padding:'8px 12px', borderRadius:'7px', textAlign:'left' }}>{ex}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 04 THE SQUAD */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="04" title="The Squad — Who Does What" desc="Your complete roster of Slingshot agents and their specialties" />
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'separate', borderSpacing:'0', border:`1px solid ${BD}`, borderRadius:'14px', overflow:'hidden' }}>
              <thead>
                <tr style={{ background:`linear-gradient(135deg,${N},${R})` }}>
                  {['Agent','Role & Title','Specialty','Use When...'].map(h => (
                    <th key={h} style={{ padding:'14px 18px', textAlign:'left', fontSize:'11px', fontWeight:'700', color:'rgba(255,255,255,0.7)', letterSpacing:'1px', textTransform:'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {agents.map((agent, idx) => (
                  <tr key={agent.name} style={{ background: idx%2===0 ? '#fff' : CB, borderBottom:`1px solid ${BD}` }}>
                    <td style={{ padding:'12px 18px', fontSize:'13px', verticalAlign:'top' }}>
                      <span style={{ fontSize:'18px' }}>{agent.emoji}</span>{' '}
                      <strong style={{ color:N }}>{agent.name}</strong>
                    </td>
                    <td style={{ padding:'12px 18px', fontSize:'11px', color:H, fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.5px', verticalAlign:'top' }}>{agent.title}</td>
                    <td style={{ padding:'12px 18px', fontSize:'13px', color:M, lineHeight:'1.5', verticalAlign:'top' }}>{agent.specialty}</td>
                    <td style={{ padding:'12px 18px', fontSize:'13px', color:M, lineHeight:'1.5', fontStyle:'italic', verticalAlign:'top' }}>{agent.useWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 05 SKILLS */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="05" title="Skills Available" desc="Installed capabilities that agents can invoke — your power tools" />
          <div style={{ display:'flex', gap:'14px', padding:'18px 22px', borderRadius:'12px', marginBottom:'20px', background:'rgba(123,140,222,0.08)', border:'1px solid rgba(123,140,222,0.25)' }}>
            <div style={{ fontSize:'20px', flexShrink:0 }}>🔧</div>
            <div>
              <div style={{ fontSize:'13px', fontWeight:'700', color:N, marginBottom:'4px' }}>Skills are activated automatically</div>
              <div style={{ fontSize:'13px', color:M, lineHeight:'1.55' }}>You don&apos;t need to invoke skills by name. When you make a request, the agent reads the situation and pulls in the right skill. Just describe what you need.</div>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'12px' }}>
            {skills.map(skill => (
              <div key={skill.name} style={{ display:'flex', alignItems:'flex-start', gap:'12px', padding:'16px 18px', background:CB, border:`1px solid ${BD}`, borderRadius:'10px' }}>
                <div style={{ width:'36px', height:'36px', background:`linear-gradient(135deg,${N},${R})`, borderRadius:'9px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', flexShrink:0 }}>{skill.icon}</div>
                <div>
                  <div style={{ fontSize:'13px', fontWeight:'700', color:N, fontFamily:'monospace', marginBottom:'3px' }}>
                    {skill.name}
                    {skill.badge && <span style={{ fontSize:'9px', fontWeight:'700', background:'rgba(46,204,113,0.12)', color:'#27ae60', border:'1px solid rgba(46,204,113,0.3)', padding:'2px 7px', borderRadius:'4px', textTransform:'uppercase', marginLeft:'6px' }}>{skill.badge}</span>}
                  </div>
                  <div style={{ fontSize:'12px', color:M, lineHeight:'1.45' }}>{skill.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 06 PROMPTS */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="06" title="Prompt Starters — Copy & Paste Ready" desc="Real prompts organized by use case. Replace brackets with your details." />
          {([
            ['🔍 Research & Intelligence',[
              'Run a competitor spy on [company name] — strengths, weaknesses, positioning, and anything we can use in sales conversations',
              'Research [prospect name] at [company] before my call — LinkedIn, recent news, what they care about, how to open',
              "What's the AI news this week? Anything our clients should know about or that affects our competitive position?",
              'Build a battlecard against [competitor] — how we win, where they\'re weak, what to say when a prospect brings them up',
            ]],
            ['📧 Outreach & Campaigns',[
              'Write a 3-touch cold email sequence for [ICP] offering [product/service] — use PAS framework, keep it short',
              'Start a campaign for lead [name] using the post-discovery template — they\'re in the [pipeline name] stage',
              'Score all leads in my [pipeline name] GHL pipeline — fit score, urgency score, and recommended next action for each',
            ]],
            ['📋 Strategy & Planning',[
              "I need a proposal for [client name] — here's the brief: [paste discovery notes / call transcript]",
              'Build my ICP for [product/service] — firmographics, psychographics, buying triggers, 3 personas most likely to buy',
              'Run an OODA loop on this decision: [describe decision] — Observe → Orient → Decide → Act breakdown',
            ]],
            ['✍️ Content & Copy',[
              'Write a LinkedIn post about [topic] — hook that stops the scroll, 3-5 punchy paragraphs, strong CTA',
              'I need a press release for [launch/milestone] — Murphy treatment: headline, hook, quotes, boilerplate',
            ]],
            ['⚙️ Operations & Automation',[
              'Build a GHL automation that triggers when a lead hits [stage name] — send follow-up email + schedule task for Vince',
              'Check my Calendly for discovery calls this week and brief me on each prospect before each call',
            ]],
          ] as [string, string[]][]).map(([cat, prompts]) => (
            <div key={cat} style={{ marginBottom:'24px' }}>
              <div style={{ fontSize:'12px', fontWeight:'700', color:H, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'10px', paddingLeft:'4px' }}>{cat}</div>
              {prompts.map((p, i) => (
                <div key={i} style={{ background:N, borderRadius:'8px', padding:'12px 16px', marginBottom:'8px', display:'flex', gap:'10px' }}>
                  <div style={{ color:H, flexShrink:0 }}>›</div>
                  <div style={{ fontFamily:'monospace', fontSize:'12.5px', color:'#e0e4ff', lineHeight:'1.5' }}>{p}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* 07 SOPs */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="07" title="SOPs Reference" desc="The operating standards that govern how this squad works" />
          <div style={{ display:'flex', gap:'14px', padding:'18px 22px', borderRadius:'12px', marginBottom:'16px', background:'rgba(123,140,222,0.08)', border:'1px solid rgba(123,140,222,0.25)' }}>
            <div style={{ fontSize:'20px', flexShrink:0 }}>📚</div>
            <div>
              <div style={{ fontSize:'13px', fontWeight:'700', color:N, marginBottom:'4px' }}>These aren&apos;t suggestions</div>
              <div style={{ fontSize:'13px', color:M, lineHeight:'1.55' }}>SOPs are how we operate consistently. Every agent on the squad knows them. When you invoke a SOP (e.g. &quot;run the Lucy QA gate&quot;), the agent executes it exactly as written.</div>
            </div>
          </div>
          {sops.map(sop => (
            <div key={sop.number} style={{ display:'flex', gap:'16px', padding:'18px 22px', background:CB, border:`1px solid ${BD}`, borderLeft:`4px solid ${R}`, borderRadius:'0 12px 12px 0', marginBottom:'10px' }}>
              <div style={{ width:'28px', height:'28px', background:R, color:'white', borderRadius:'7px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:'800', flexShrink:0 }}>{sop.number}</div>
              <div>
                <div style={{ fontSize:'14px', fontWeight:'700', color:N, marginBottom:'4px' }}>{sop.icon} {sop.name}</div>
                <div style={{ fontSize:'13px', color:M, lineHeight:'1.5' }}>{sop.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 08 COMMS */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="08" title="Communications Structure" desc="How the squad handles information flow — who talks to whom and when" />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'14px', marginBottom:'20px' }}>
            {([
              ['Nick → Bo',"Strategy, decisions, new tasks, orchestration. Bo is Nick's right hand.",'#war-room or #nick-feed'],
              ['Nick → Specific Agent','Say "I want to talk to [agent name]" and Bo will spawn them or connect you directly.','#war-room → agent thread'],
              ['Team → Bo','Same as Nick — just ask. Every team member has equal access to the full squad.','#war-room'],
              ['Escalation Protocol',"Tag @Bo in #war-room. Don't wait. Don't try to fix it yourself. Tag Bo, describe the situation.",'@Bo in #war-room'],
            ] as [string,string,string][]).map(([from,desc,ch]) => (
              <div key={from} style={{ background:CB, border:`1px solid ${BD}`, borderRadius:'12px', padding:'20px 22px' }}>
                <div style={{ fontSize:'11px', fontWeight:'700', color:H, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'6px' }}>{from}</div>
                <div style={{ fontSize:'18px', margin:'4px 0', color:R }}>↓</div>
                <div style={{ fontSize:'13px', color:M, lineHeight:'1.55', marginTop:'6px' }}>{desc}</div>
                <div style={{ display:'inline-block', background:'rgba(44,62,140,0.1)', color:R, fontSize:'11px', fontWeight:'600', fontFamily:'monospace', padding:'3px 9px', borderRadius:'5px', marginTop:'6px' }}>{ch}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'16px' }}>
            <div style={{ background:CB, border:`1px solid ${BD}`, borderRadius:'14px', padding:'28px 30px' }}>
              <h3 style={{ fontSize:'15px', fontWeight:'700', color:N, marginBottom:'10px' }}>🌙 After-Hours Coverage</h3>
              <p style={{ fontSize:'13px', color:M, lineHeight:'1.65' }}>All agents are 24/7. Heartbeat checks run every 60 minutes around the clock. If you&apos;re working late, the squad is working late. Drop your request and it will be handled.</p>
            </div>
            <div style={{ background:CB, border:`1px solid ${BD}`, borderRadius:'14px', padding:'28px 30px' }}>
              <h3 style={{ fontSize:'15px', fontWeight:'700', color:N, marginBottom:'10px' }}>🚫 Client-Facing Actions</h3>
              <p style={{ fontSize:'13px', color:M, lineHeight:'1.65' }}><strong>Always ask Bo first.</strong> Bo asks Nick. Nick approves. Then the agent acts. No agent ever contacts a client or prospect without explicit approval going up the chain. Non-negotiable.</p>
            </div>
          </div>
        </div>

        {/* 09 QUICK REF */}
        <div style={{ marginBottom:'60px' }}>
          <SH n="09" title="Quick Reference Card" desc="Everything you need on one page — print this and keep it close" />
          <div style={{ background:'linear-gradient(135deg,#0d0d4a 0%,#1a1a6e 60%,#2c3e8c 100%)', borderRadius:'18px', padding:'40px', color:'white' }}>
            <div style={{ fontSize:'22px', fontWeight:'900', marginBottom:'6px' }}>⚡ Slingshot Command Center — Field Reference</div>
            <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', marginBottom:'32px' }}>Taptico Internal &middot; April 2026 &middot; Keep this card handy</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px', marginBottom:'32px' }}>
              {/* Col 1: Commands */}
              <div>
                <h4 style={{ fontSize:'11px', color:H, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'14px', paddingBottom:'8px', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>🎯 Common Commands</h4>
                {([
                  ['@Bo','orchestration, routing'],
                  ['"Competitor spy on [X]"','intel fast'],
                  ['"Score my leads"','priority ranking'],
                  ['"Proposal for [client]"','full doc from brief'],
                  ['"Research [prospect]"','pre-call brief'],
                  ['"Talk to [agent]"','direct connection'],
                  ['"Enter mission mode"','complex projects'],
                  ['"First principles this"','deep problem solving'],
                ] as [string,string][]).map(([cmd,desc]) => (
                  <div key={cmd} style={{ display:'flex', gap:'8px', marginBottom:'9px', alignItems:'flex-start' }}>
                    <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:H, flexShrink:0, marginTop:'6px' }} />
                    <div style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.75)', lineHeight:'1.5' }}><strong style={{ color:'white' }}>{cmd}</strong> — {desc}</div>
                  </div>
                ))}
              </div>
              {/* Col 2: Agents */}
              <div>
                <h4 style={{ fontSize:'11px', color:H, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'14px', paddingBottom:'8px', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>🤖 Key Agents</h4>
                {agents.slice(0,12).map(agent => (
                  <div key={agent.name} style={{ display:'flex', gap:'8px', marginBottom:'9px', alignItems:'flex-start' }}>
                    <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:H, flexShrink:0, marginTop:'6px' }} />
                    <div style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.75)', lineHeight:'1.5' }}>
                      <strong style={{ color:'white' }}>{agent.name} {agent.emoji}</strong> — {agent.title}
                    </div>
                  </div>
                ))}
              </div>
              {/* Col 3: Channels + SOPs */}
              <div>
                <h4 style={{ fontSize:'11px', color:H, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'14px', paddingBottom:'8px', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>📡 Channel Quick Map</h4>
                {([
                  ['#war-room','Urgent, decisions'],
                  ['#new-builds','Build tracking'],
                  ['#ai-intel','Daily AI news'],
                  ['#nick-feed',"Nick's channel"],
                  ['#nate','n8n automation'],
                  ['#announcements','Squad updates'],
                ] as [string,string][]).map(([ch,desc]) => (
                  <div key={ch} style={{ display:'flex', gap:'8px', marginBottom:'9px' }}>
                    <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:H, flexShrink:0, marginTop:'6px' }} />
                    <div style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.75)' }}><strong style={{ color:'white' }}>{ch}</strong> — {desc}</div>
                  </div>
                ))}
                <div style={{ marginTop:'14px', paddingTop:'10px', borderTop:'1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize:'11px', color:H, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:'10px' }}>🔑 Top SOPs</h4>
                  {([
                    ['Lucy Gate','All deliverables reviewed first'],
                    ['Post Mortem','Every failure documented'],
                    ['Client actions','Bo → Nick → Approve → Act'],
                    ['Mission Mode','3+ phases = formal mission'],
                  ] as [string,string][]).map(([s,d]) => (
                    <div key={s} style={{ display:'flex', gap:'8px', marginBottom:'9px' }}>
                      <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:H, flexShrink:0, marginTop:'6px' }} />
                      <div style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.75)' }}><strong style={{ color:'white' }}>{s}</strong> — {d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dos & Don'ts */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
              <div style={{ borderRadius:'12px', padding:'18px 20px', background:'rgba(46,204,113,0.1)', border:'1px solid rgba(46,204,113,0.25)' }}>
                <h4 style={{ color:'#2ecc71', fontSize:'13px', fontWeight:'700', marginBottom:'10px' }}>✓ Do This</h4>
                {['Talk naturally — plain English always works','Drop everything urgent in #war-room','Route major deliverables through Lucy before Nick sees them','Tag @Bo for anything multi-step or complex','Ask for pre-call briefs (Iris) before every discovery call','Check #ai-intel daily — Cipher drops gold in there','Say "enter mission mode" for 3+ phase projects','Document failures immediately — Post Mortem is mandatory'].map(item => (
                  <div key={item} style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.7)', marginBottom:'7px', paddingLeft:'16px', position:'relative', lineHeight:'1.45' }}>
                    <span style={{ position:'absolute', left:0, color:'#2ecc71', fontWeight:'700' }}>✓</span>{item}
                  </div>
                ))}
              </div>
              <div style={{ borderRadius:'12px', padding:'18px 20px', background:'rgba(231,76,60,0.1)', border:'1px solid rgba(231,76,60,0.25)' }}>
                <h4 style={{ color:'#e74c3c', fontSize:'13px', fontWeight:'700', marginBottom:'10px' }}>✗ Don&apos;t Do This</h4>
                {["Contact clients without Bo's approval",'Skip the Lucy QA gate on major deliverables',"Wait to escalate — tag @Bo the moment something's wrong",'Assume an agent did something without confirming output','Put action items in CC emails — only TO gets acted on','Run a complex multi-agent project without Mission Mode','Approve client-facing content without the full approval chain','Ask Bo to write copy (that\'s for the Slingshots)'].map(item => (
                  <div key={item} style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.7)', marginBottom:'7px', paddingLeft:'16px', position:'relative', lineHeight:'1.45' }}>
                    <span style={{ position:'absolute', left:0, color:'#e74c3c', fontWeight:'700' }}>✗</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background:N, padding:'30px 60px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <div style={{ fontSize:'16px', fontWeight:'800', color:'white' }}>Taptico<span style={{ color:'#7b8cde' }}>.</span></div>
          <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.35)', marginTop:'4px' }}>Slingshot Command Center User Guide &middot; April 2026</div>
        </div>
        <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.45)', fontStyle:'italic' }}>&quot;Fortune 500 firepower for teams that move fast.&quot;</div>
        <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.35)', textAlign:'right' }}>Internal Use Only &middot; Bo@taptico.com<br />Questions? Tag @Bo in #war-room</div>
      </div>
    </div>
  );
}
