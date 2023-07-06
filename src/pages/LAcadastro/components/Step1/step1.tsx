import { useState } from 'react'
import { PF } from './components/PF/pf'
import { PJ } from './components/PJ/pj'

interface IStep1 {
  Avançar: () => void
}

export function Step1({ Avançar }: IStep1) {
  const [isPj, setIsPj] = useState(true)

  const handleSelectPJ = () => {
    setIsPj(true)
  }

  const handleSelectPF = () => {
    setIsPj(false)
  }

  return (
    <>
      {isPj ? (
        <PJ Avançar={Avançar} BPJ={handleSelectPJ} BPF={handleSelectPF} />
      ) : (
        <PF Avançar={Avançar} BPJ={handleSelectPJ} BPF={handleSelectPF} />
      )}
    </>
  )
}
