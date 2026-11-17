import { Link } from 'react-router-dom'
import { Bike, CalendarCheck, Droplets, Wallet } from 'lucide-react'
import { Avatar, Badge, Card, Hero, HeroStat, Progress, StatCard } from '../components/ui'
import { BarsChart } from '../components/Charts'
import { routes, weekVolume } from '../data'

export const routeTone = { Completed: 'green', 'On route': 'blue', Delayed: 'red' }

export default function Dashboard() {
  const total = routes.reduce((s, r) => s + r.stops, 0)
  const done = routes.reduce((s, r) => s + r.done, 0)
  return (
    <>
      <Hero
        eyebrow="Morning delivery · Live"
        title={`${done} of ${total} deliveries done 🚴`}
        subtitle="4 riders on the road. Customers are notified on WhatsApp as soon as their milk is delivered."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Litres today" value="577 L" /><HeroStat label="On-time" value="96%" /></div>}
      >
        <Link to="/routes" className="btn bg-white text-brand-700 hover:bg-brand-50"><Bike className="h-4 w-4" /> Track riders</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active subscriptions" value="1,248" delta="4.6%" icon={CalendarCheck} />
        <StatCard label="Litres / month" value="17,320 L" delta="3.1%" icon={Droplets} tone="sky" />
        <StatCard label="Wallet balance" value="₹6.8L" icon={Wallet} tone="emerald" hint="Prepaid by customers" />
        <StatCard label="Paused tomorrow" value="37" icon={CalendarCheck} tone="amber" hint="Vacation mode" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-5">
        <Card title="Route progress" className="xl:col-span-3">
          <div className="space-y-5">
            {routes.map((r) => (
              <div key={r.id} className="flex items-center gap-4">
                <Avatar name={r.rider} size="sm" />
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span><b className="text-slate-800">{r.name}</b> <span className="text-slate-400">· {r.rider}</span></span>
                    <span className="flex items-center gap-2"><span className="text-slate-500">{r.done}/{r.stops}</span><Badge tone={routeTone[r.status]}>{r.status}</Badge></span>
                  </div>
                  <Progress value={(r.done / r.stops) * 100} tone={r.status === 'Delayed' ? 'red' : r.status === 'Completed' ? 'green' : 'brand'} />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Litres delivered" subtitle="This week" className="xl:col-span-2">
          <BarsChart data={weekVolume} series={[{ key: 'litres', name: 'Litres' }]} height={250} />
        </Card>
      </div>
    </>
  )
}
