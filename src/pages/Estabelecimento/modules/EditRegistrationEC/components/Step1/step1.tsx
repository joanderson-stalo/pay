import { PF } from './components/PF/pf'
import { PJ } from './components/PJ/pj'
import { useDocumentLA } from '@/context/useDocumentLA'



export function Step1() {
  const { documentTypeLA, updateToCNPJLA, updateToCPFLA } = useDocumentLA()

  console.log(documentTypeLA)

  return (
    <>
      {documentTypeLA === 'CNPJ' ? (
        <PJ  BPJ={updateToCNPJLA} BPF={updateToCPFLA} />
      ) : (
        <PF BPJ={updateToCNPJLA} BPF={updateToCPFLA} />
      )}
    </>
  )
}
