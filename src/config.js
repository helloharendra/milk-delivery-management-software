import {
  BarChart3, Bike, CalendarDays, CreditCard, LayoutDashboard, Map, MessageSquare, Milk, Package, Settings, Smartphone, Users,
} from 'lucide-react'

export const app = {
  name: 'MilkRoute',
  tagline: 'Milk Subscription & Delivery',
  logo: Milk,
  user: { name: 'Pankaj Saxena', role: 'Owner · Fresh Dairy Co.' },
  searchPlaceholder: 'Search customer, flat no., route…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Daily operations',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Subscriptions', to: '/subscriptions', icon: CalendarDays },
      { label: 'Delivery Routes', to: '/routes', icon: Map },
    ],
  },
  {
    title: 'Business',
    items: [
      { label: 'Customers', icon: Users },
      { label: 'Products & Pricing', icon: Package },
      { label: 'Monthly Billing & Wallet', icon: CreditCard },
      { label: 'Delivery Staff', icon: Bike },
    ],
  },
  {
    title: 'Apps & admin',
    items: [
      { label: 'Customer Mobile App', icon: Smartphone },
      { label: 'SMS & WhatsApp Alerts', icon: MessageSquare },
      { label: 'Reports', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
