import { PaginaView } from '@/components/PaginaView/paginaView'
import { Tabela } from './components/table/table'
import * as S from './styled'
import { SetStateAction, useEffect, useState, useCallback } from 'react'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'
import axios from 'axios'
import { useLogin } from '@/context/user.login'
import { Loading } from '@/components/Loading/loading'
import { EstabelecimentoHeader } from './components/estabelecimentoHeader/estabelecimentoHeader'
import { CardEstablishment } from './Mobile/CardEstablishment/cardEstablishment'
import { baseURL } from '@/config/color'
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal'
import { CustomSelect } from '@/components/Select/select'

import { TagFilter } from '@/components/TagFilter/tagFilter'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { NoteData } from '@/components/NoteData/noteData'

export function Estabelecimento() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const { dataUser } = useLogin()
  const [totalSellers, setTotalSellers] = useState(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sellers, setSellers] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [acquires, setAcquires] = useState<any[]>([])
  const [dataLA, setDataLA] = useState<any[]>([])
  const [triggerSearch, setTriggerSearch] = useState(false)
  const [selectedLicenciado, setSelectedLicenciado] = useState<string>(
    () => localStorage.getItem('@licenciadoAutorizadoEstablishment') || ''
  )
  const [selectedFornecedor, setSelectedFornecedor] = useState<string>(
    () => localStorage.getItem('@fornecedorEstablishment') || ''
  )

  const fetchEC = useCallback(
    async (search?: string) => {
      setLoading(true)

      let url = `${baseURL}seller/indexec?perpage=${String(
        itensPorPage
      )}&page=${currentPage}`

      const licenciadoAutorizadoEstablishment = localStorage.getItem(
        '@licenciadoAutorizadoEstablishment'
      )
      if (licenciadoAutorizadoEstablishment) {
        url += `&seller_id=${licenciadoAutorizadoEstablishment}`
      }

      const fornecedorEstablishment = localStorage.getItem(
        '@fornecedorEstablishment'
      )
      if (fornecedorEstablishment) {
        url += `&acquire_id=${fornecedorEstablishment}`
      }

      if (search) {
        url += `&trading_name=${searchValue}`
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      }

      try {
        const response = await axios.get(url, config)
        const { data } = response
        setSellers(response.data.sellers)
        setTotalSellers(response.data.total_sellers)
        setCurrentPage(response.data.current_page)
      } catch (error) {

      } finally {
        setLoading(false)
      }
    },
    [itensPorPage, currentPage, baseURL, dataUser?.token, searchValue]
  )

  const handleNextPage = useCallback(() => {
    setCurrentPage(prevPage => prevPage + 1)
  }, [])

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }, [currentPage])

  const fetchAcquire = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}acquire/index`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      })
      const data = response.data
      if (data && data.acquires) {
        const options = data.acquires.map(
          (acquire: { id: any; acquire_label: any }) => ({
            value: acquire.id,
            label: acquire.acquire_label
          })
        )
        setAcquires(options)
      }
    } catch (error) {}
  }, [dataUser?.token])

  const fetchDataLA = useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}seller/indexla`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      })
      const data = response.data
      if (data && data.sellers) {
        const options = data.sellers.map(
          (
            seller: { trading_name: any; type: any; id: any; cnpj_cpf: any },
            index: number
          ) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.type}-${seller.cnpj_cpf}`
          })
        )
        setDataLA(options)
      }
    } catch (error) {}
  }, [dataUser?.token])

  useEffect(() => {
    fetchAcquire()
    fetchDataLA()
  }, [fetchAcquire, fetchDataLA])

  const handleSaveToLocalStorage = async () => {
    if (currentPage !== 1) {
      await setCurrentPage(1)
    }

    if (selectedLicenciado)
      localStorage.setItem(
        '@licenciadoAutorizadoEstablishment',
        selectedLicenciado
      )
    if (selectedFornecedor)
      localStorage.setItem('@fornecedorEstablishment', selectedFornecedor)

    if (currentPage === 1) {
      fetchEC()
    }
  }

  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1))

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchEC(searchValue)
    }
  }, [fetchEC, searchValue])

  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey)
    if (filterKey === '@licenciadoAutorizadoEstablishment') {
      setSelectedLicenciado('')
    }
    if (filterKey === '@fornecedorEstablishment') {
      setSelectedFornecedor('')
    }
    fetchEC()
  }

  const activeFilters = [
    localStorage.getItem('@licenciadoAutorizadoEstablishment') && {
      title: 'Licenciado Autorizado',
      onClick: () => handleRemoveFilter('@licenciadoAutorizadoEstablishment')
    },
    localStorage.getItem('@fornecedorEstablishment') && {
      title: 'Fornecedor',
      onClick: () => handleRemoveFilter('@fornecedorEstablishment')
    }
  ].filter((filter): filter is { title: string; onClick: () => void } =>
    Boolean(filter)
  )

  const fetchData = async (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value)
  }

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setTriggerSearch(current => !current)
      if (currentPage !== 1) {
        setCurrentPage(1)
      }
    }
  }

  useEffect(() => {
    if (searchValue.trim() !== '' && triggerSearch) {
      fetchEC(searchValue)
      setTriggerSearch(false)
    }
  }, [searchValue, currentPage, triggerSearch, fetchEC])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <EstabelecimentoHeader />

        {sellers.length > 0 && (
          <>
            <S.Input isFocused={isFocused}>
              <input
                type="text"
                placeholder="Pesquise por nome do estabelecimento"
                value={searchValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <S.SearchIcon isFocused onClick={handleSearch}>
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>
          </>
        )}

        {sellers.length > 0 && (
          <>
            <S.ContainerButton>
              <S.ContenteFilter>
                <BtnFilterModal
                  disabled={!selectedLicenciado && !selectedFornecedor}
                  onClick={handleSaveToLocalStorage}
                >
                  <CustomSelect
                    optionsData={{ options: dataLA }}
                    placeholder="Digite aqui ou clique para ver a lista"
                    label="Licenciado Autorizado"
                    onChange={(selectedOption: {
                      value: SetStateAction<string>
                    }) => setSelectedLicenciado(selectedOption.value)}
                  />
                  <CustomSelect
                    optionsData={{ options: acquires }}
                    placeholder="Digite aqui ou clique para ver a lista"
                    label="Fornecedor"
                    onChange={(selectedOption: {
                      value: SetStateAction<string>
                    }) => setSelectedFornecedor(selectedOption.value)}
                  />
                </BtnFilterModal>

                {activeFilters.length > 0 && (
                  <TagFilter filters={activeFilters} />
                )}
              </S.ContenteFilter>
            </S.ContainerButton>
          </>
        )}

        {sellers.length > 0 && (
          <>
            <Tabela rows={sellers} />
            <S.ContainerMobile>
              <CardEstablishment rows={sellers} />
            </S.ContainerMobile>
            <S.Context>
              <S.Linha />
              <S.ContainerPagina>
                <PaginaView totalItens={itensPorPage} />
                <S.ContainerItens>
                  <ItensPorPage
                    itensPorPage={itensPorPage}
                    setItensPorPage={setItensPorPage}
                  />
                  <Pagination
                    currentPage={currentPage}
                    onPageClick={fetchData}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                  />
                </S.ContainerItens>
              </S.ContainerPagina>
            </S.Context>
          </>
        )}

{sellers.length === 0 && (
  <>
  <NoteData />
  </>
) }

      </S.Container>
    </>
  )
}
