import { PF } from './components/PF/pf'
import { PJ } from './components/PJ/pj'
import { useDocumentEC } from '@/context/useDocumentEC'

interface IStep1 {
  Avançar: () => void
}

export function Step1({ Avançar }: IStep1) {
  const { documentTypeEC, updateToCNPJEC, updateToCPFEC } = useDocumentEC()

  return (
    <>
      {documentTypeEC === 'CNPJ' ? (
        <PJ Avançar={Avançar} BPJ={updateToCNPJEC} BPF={updateToCPFEC} />
      ) : (
        <PF Avançar={Avançar} BPJ={updateToCNPJEC} BPF={updateToCPFEC} />
      )}
    </>
  )
}
