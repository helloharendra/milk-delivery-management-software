import { useState } from 'react'
import { MapPin, Pause, Plus, Wallet } from 'lucide-react'
import { Avatar, Badge, PageHeader, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { subscriptions } from '../data'

// November 2026 starts on a Sunday
const days = Array.from({ length: 30 }, (_, i) => i + 1)
const offset = 0
const today = 17

export default function Subscriptions() {
  const { openContact } = useContact()
  const [subs, setSubs] = useState(subscriptions)
  const toggle = (id, d) => setSubs((ss) => ss.map((s) => (s.id !== id ? s : { ...s, paused: s.paused.includes(d) ? s.paused.filter((x) => x !== d) : [...s.paused, d] })))

  return (
    <>
      <PageHeader
        title="Subscriptions"
        subtitle="Tap any upcoming date to pause or resume a delivery, just like customers do in the app."
        actions={<button onClick={() => openContact('New Subscription')} className="btn-primary"><Plus className="h-4 w-4" /> New subscription</button>}
      />
      <div className="grid gap-5 xl:grid-cols-2">
        {subs.map((s) => {
          const delivered = days.filter((d) => d < today && !s.paused.includes(d)).length
          return (
            <div key={s.id} className="card p-5 animate-fade-up">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar name={s.name} />
                  <div>
                    <p className="font-semibold text-slate-800">{s.name}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-400"><MapPin className="h-3 w-3" />{s.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge tone="brand">{s.freq}</Badge>
                  <p className={`mt-1.5 flex items-center justify-end gap-1 text-xs font-semibold ${s.wallet < 200 ? 'text-rose-600' : 'text-slate-500'}`}><Wallet className="h-3.5 w-3.5" />{inr(s.wallet)}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-50/60 px-4 py-3 text-sm">
                <span className="font-semibold text-brand-800">🥛 {s.plan}</span>
                <span className="text-brand-700">{inr(s.price)}/day</span>
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between text-xs"><span className="font-semibold text-slate-600">November 2026</span><span className="text-slate-400">{delivered} delivered · {s.paused.length} paused</span></div>
                <div className="grid grid-cols-7 gap-1.5 text-center text-[11px]">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i} className="font-semibold text-slate-400">{d}</span>)}
                  {Array.from({ length: offset }).map((_, i) => <span key={`o${i}`} />)}
                  {days.map((d) => {
                    const paused = s.paused.includes(d)
                    const past = d < today
                    return (
                      <button
                        key={d}
                        disabled={past}
                        onClick={() => toggle(s.id, d)}
                        className={`grid aspect-square place-items-center rounded-lg font-semibold transition ${
                          paused ? 'bg-amber-100 text-amber-700 ring-1 ring-amber-300' : past ? 'bg-emerald-50 text-emerald-600' : d === today ? 'bg-brand-500 text-white shadow' : 'bg-slate-50 text-slate-600 hover:bg-brand-100'
                        }`}
                      >
                        {paused ? <Pause className="h-3 w-3" /> : d}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
