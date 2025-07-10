import Navbar from "@/components/Navbar"
import Content from "@/components/Content"

function App() {
  console.log('render app')
  return (
    <div className="w-full h-full bg-[#100F15] absolute top-0 left-0 flex flex-1">
      <Navbar />
      <Content />
    </div>
  )
}

export default App