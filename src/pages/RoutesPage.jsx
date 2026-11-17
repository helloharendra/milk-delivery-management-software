import { useState } from 'react'
import { CheckCircle2, Circle, Navigation, Phone } from 'lucide-react'
import { Avatar, Badge, Card, PageHeader, Progress } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { routes, stops as initialStops } from '../data'
import { routeTone } from './Dashboard'

export default function RoutesPage() {
  const { openContact } = useContact()
  const [active, setActive] = useState(routes[1])
  const [stops, setStops] = useState(initialStops)

  return (
    <>
      <PageHeader title="Delivery routes" subtitle="Optimised routes, live rider progress and proof of delivery." />
      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <div className="space-y-3">
          {routes.map((r) => (
            <button key={r.id} onClick={() => setActive(r)} className={`card w-full p-4 text-left transition hover:-translate-y-0.5 ${active.id === r.id ? 'ring-2 ring-brand-500' : ''}`}>
              <div className="flex items-center justify-between"><p className="font-semibold text-slate-800">{r.id} · {r.name}</p><Badge tone={routeTone[r.status]}>{r.status}</Badge></div>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500"><Avatar name={r.rider} size="sm" /> {r.rider} · {r.litres} L · ETA {r.eta}</div>
              <div className="mt-3"><Progress value={(r.done / r.stops) * 100} /></div>
            </button>
          ))}
        </div>
        <Card title={`${active.name} · stops`} subtitle={`${active.rider} · ${active.done}/${active.stops} delivered`}
          action={<div className="flex gap-2"><button onClick={() => openContact('Call Rider')} className="btn-ghost px-3 py-1.5 text-xs"><Phone className="h-3.5 w-3.5" /> Call</button><button onClick={() => openContact('Live GPS Tracking & Route Optimisation')} className="btn-primary px-3 py-1.5 text-xs"><Navigation className="h-3.5 w-3.5" /> Live map</button></div>}>
          <div className="relative mb-6 h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-sky-50 to-emerald-50">
            <svg viewBox="0 0 600 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <path d="M20 150 C 120 40, 200 160, 300 80 S 480 30, 580 60" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10 8" className="text-brand-500" />
              {[[20, 150], [140, 92], [300, 80], [420, 52], [580, 60]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="9" className={i < 3 ? 'fill-emerald-500' : 'fill-white stroke-brand-500'} strokeWidth="3" />)}
            </svg>
            <span className="absolute left-[47%] top-[30%] grid h-9 w-9 place-items-center rounded-full bg-slate-900 text-lg shadow-xl ring-4 ring-white">🛵</span>
          </div>
          <ol className="relative space-y-1 before:absolute before:left-[15px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-slate-200">
            {stops.map((s, i) => (
              <li key={s.flat} className="relative flex items-center gap-4 rounded-xl p-2 hover:bg-slate-50">
                <button onClick={() => setStops((ss) => ss.map((x, j) => (j === i ? { ...x, done: !x.done } : x)))} className="relative z-10 bg-white">
                  {s.done ? <CheckCircle2 className="h-8 w-8 text-emerald-500" /> : <Circle className="h-8 w-8 text-slate-300" />}
                </button>
                <div className="flex-1 text-sm"><p className={`font-semibold ${s.done ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{s.flat}</p><p className="text-xs text-slate-400">{s.name} · {s.items}</p></div>
                {s.done && <Badge tone="green">Delivered</Badge>}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </>
  )
}
