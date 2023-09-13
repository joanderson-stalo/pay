import { useState } from 'react'
import { PF } from './components/PF/pf'
import { PJ } from './components/PJ/pj'
import { useDocument } from '@/context/useDocument'

interface IStep1 {
  Avançar: () => void
}

export function Step1({ Avançar }: IStep1) {
  const { documentType, updateToCNPJ, updateToCPF } = useDocument()

  console.log(documentType)

  return (
    <>
      {documentType === 'CNPJ' ? (
        <PJ Avançar={Avançar} BPJ={updateToCNPJ} BPF={updateToCPF} />
      ) : (
        <PF Avançar={Avançar} BPJ={updateToCNPJ} BPF={updateToCPF} />
      )}
    </>
  )
}
