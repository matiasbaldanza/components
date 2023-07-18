import './App.css'

const menuItems = [
  {
    name: 'Products',
    url: '/products'
  },
  {
    name: 'Solutions',
    url: '/solutions'
  },
  {
    name: 'Developers',
    url: '/developers'
  },
  {
    name: 'Resources',
    url: '/resources'
  },
  {
    name: 'Pricing',
    url: '/pricing'
  }
]

function App () {
  return (
      <ul className='flex gap-3 px-4 py-2 rounded bg-slate-200'>
        {menuItems.map((item) => (
          <li
            className='px-2 py-2 rounded hover:opacity-50'
            key={item.url}
          >{item.name}
          </li>
        ))}
      </ul>
  )
}

export default App
