import { Box, Container, Input, Text } from '@mantine/core'
import './App.css'
import { FiMenu, FiHome, FiSettings } from "react-icons/fi";

function App() {
  return (
    <>
      <Container>
        <Text size="md" my="md" mx="auto">
          Hello Akshay,
        </Text>
        <Text size="xl" my="md" mx="auto">
          Today
        </Text>
        <Input placeholder="Input component" />
        <Text size="xl" my="md" mx="auto">
          Links
        </Text>
        <Input placeholder="Input component" />
        <Text size="xl" my="md" mx="auto">
          Sheets
        </Text>
        <Input placeholder="Input component" />
        <Text size="xl" my="md" mx="auto">
          Tasks
        </Text>
        <Input placeholder="Input component" />
        <Text size="xl" my="md" mx="auto">
          Templates
        </Text>
        <Input placeholder="Input component" />
      </Container>
      <Box className='menu'>
        <div className='menu-item menu1'><FiSettings size={22} /></div>
        <div className='menu-item home'><FiHome size={25} /></div>
        <div className='menu-item settings'><FiMenu size={22} /></div>
      </Box>

    </>
  )
}

export default App
