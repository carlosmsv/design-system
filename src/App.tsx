import { Envelope } from 'phosphor-react'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {

  return (
    <>
      <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
        <header className="flex flex-col items-center">
          <Logo/>
          
          <Heading size="lg" className="mt-4">
            Ignite Lab
          </Heading>

          <Text size="lg" className="text-gray-400 mt-1">
            Faça login e comece a usar
          </Text>
        </header>

        <form className="flex flex-col items-stretch">
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input placeholder="Digite seu e-mail"/>
            </TextInput.Root>
          </label>
        </form>
      </div>
    </>
  )
}

