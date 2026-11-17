// Sample data for the UI demo. The complete project uses live APIs + database.
export const routes = [
  { id: 'R1', name: 'Sector 62 – 63', rider: 'Mohit Kumar', stops: 84, done: 84, litres: 132, status: 'Completed', eta: '6:48 AM' },
  { id: 'R2', name: 'Indirapuram', rider: 'Sunil Yadav', stops: 96, done: 71, litres: 151, status: 'On route', eta: '7:20 AM' },
  { id: 'R3', name: 'Vaishali – Kaushambi', rider: 'Akash Verma', stops: 72, done: 40, litres: 118, status: 'On route', eta: '7:35 AM' },
  { id: 'R4', name: 'Raj Nagar Extension', rider: 'Deepak Singh', stops: 110, done: 18, litres: 176, status: 'Delayed', eta: '8:05 AM' },
]

export const stops = [
  { flat: 'A-1204, Gaur Green', name: 'Sharma family', items: '1L Toned · 200g Curd', done: true },
  { flat: 'B-803, Gaur Green', name: 'Neelam Arora', items: '500ml Full Cream', done: true },
  { flat: 'C-1501, Shipra Suncity', name: 'Vivek Jain', items: '2L Cow Milk', done: true },
  { flat: 'D-402, Shipra Suncity', name: 'Fatima Sheikh', items: '1L Toned · 1 Paneer', done: false },
  { flat: 'E-1103, Mahagun', name: 'Ankit Saxena', items: '1L A2 Milk', done: false },
  { flat: 'F-207, Mahagun', name: 'Rekha Pillai', items: '500ml Toned', done: false },
]

export const subscriptions = [
  { id: 1, name: 'Neelam Arora', address: 'B-803, Gaur Green', plan: 'Full Cream 500ml', freq: 'Daily', price: 34, wallet: 620, paused: [19, 20] },
  { id: 2, name: 'Vivek Jain', address: 'C-1501, Shipra Suncity', plan: 'Cow Milk 2L', freq: 'Daily', price: 128, wallet: 1840, paused: [] },
  { id: 3, name: 'Fatima Sheikh', address: 'D-402, Shipra Suncity', plan: 'Toned 1L + Paneer (Sun)', freq: 'Daily', price: 56, wallet: 90, paused: [24, 25, 26] },
  { id: 4, name: 'Ankit Saxena', address: 'E-1103, Mahagun', plan: 'A2 Milk 1L', freq: 'Alternate days', price: 98, wallet: 2210, paused: [] },
]

export const weekVolume = [
  { label: 'Mon', litres: 548 }, { label: 'Tue', litres: 561 }, { label: 'Wed', litres: 552 }, { label: 'Thu', litres: 570 },
  { label: 'Fri', litres: 566 }, { label: 'Sat', litres: 602 }, { label: 'Sun', litres: 641 },
]
