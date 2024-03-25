import { PF } from './components/PF/pf'
import { PJ } from './components/PJ/pj'
import { useDocumentLA } from '@/context/useDocumentLA'

interface IStep1 {
  Avançar: () => void
}

export function Step1({ Avançar }: IStep1) {
  const { documentTypeLA, updateToCNPJLA, updateToCPFLA } = useDocumentLA()

  return (
    <>
      {documentTypeLA === 'CNPJ' ? (
        <PJ Avançar={Avançar} BPJ={updateToCNPJLA} BPF={updateToCPFLA} />
      ) : (
        <PF Avançar={Avançar} BPJ={updateToCNPJLA} BPF={updateToCPFLA} />
      )}
    </>
  )
}
