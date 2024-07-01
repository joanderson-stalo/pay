import { PaginaView } from '@/components/PaginaView/paginaView'
import { Tabela } from './components/table/table'
import * as S from './styled'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { ItensPorPage } from '@/components/ItensPorPage/itensPorPage'
import { Pagination } from '@/components/Pagination/pagination'
import { LicenciadoHeader } from './components/licenciadoHeader/licenciadoHeader'
import { useLogin } from '@/context/user.login'
import axios, { AxiosError } from 'axios'
import { Loading } from '@/components/Loading/loading'
import { LicensedCard } from './mobile/LicenciadosCard/licensedCard'
import { baseURL } from '@/config/color'
import { BtnFilterModal } from '@/components/BtnFilterModal/btnFilterModal'
import { CustomSelect } from '@/components/Select/select'
import { TagFilter } from '@/components/TagFilter/tagFilter'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { NoteData } from '@/components/NoteData/noteData'
import { TranslateErrorMessage } from '@/utils/translateErrorMessage'
import { toast } from 'react-toastify'

export function Licenciado() {
  const [itensPorPage, setItensPorPage] = useState<number | ''>(10)
  const [searchValue, setSearchValue] = useState('')
  const { dataUser } = useLogin()
  const [totalSellers, setTotalSellers] = useState(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [sellers, setSellers] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [fetchedOptions, setFetchedOptions] = useState([])
  const [isFocused, setIsFocused] = useState(false)
  const [triggerSearch, setTriggerSearch] = useState(false)
  const [selectedLicenciado, setSelectedLicenciado] = useState<string>(
    () => localStorage.getItem('@licenciadoAutorizadoLicensed') || ''
  )

  const fetchlA = useCallback(
    async (search?: string) => {
      setLoading(true)

      let url = `${baseURL}seller/indexla?per_page=${String(
        itensPorPage
      )}&page=${currentPage}`

      const licenciadoAutorizadoLicensed = localStorage.getItem(
        '@licenciadoAutorizadoLicensed'
      )
      if (licenciadoAutorizadoLicensed) {
        url += `&seller_id=${licenciadoAutorizadoLicensed}`
      }

      if (searchValue) {
        url += `&company_name=${searchValue}`
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
        const err = error as AxiosError<{ message: string }>;
        const errorMessage = err.response?.data?.message || 'Ocorreu um error';
        const translatedMessage = await TranslateErrorMessage(errorMessage);
        toast.error(translatedMessage);
      } finally {
        setLoading(false)
      }
    },
    [itensPorPage, currentPage, baseURL, dataUser?.token, searchValue]
  )

  const fetchData = async (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  const totalPages = Math.ceil(totalSellers / (itensPorPage || 1))

  useEffect(() => {
    if (searchValue.trim() === '') {
      fetchlA(searchValue)
    }
  }, [fetchlA, searchValue])

  const fetchLA = async () => {
    try {
      const response = await axios.get(`${baseURL}seller/list/la`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${dataUser?.token}`
        }
      })

      const data = response.data

      if (data && data.sellers) {
        const options = data.sellers.map(
          (
            seller: { trading_name: any; type: any; id: any; document: any },
            index: number
          ) => ({
            value: seller.id,
            label: `${seller.trading_name}-${seller.document}`
          })
        )

        setFetchedOptions(options)
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchLA()
  }, [])

  const handleSaveToLocalStorage = async () => {
    if (currentPage !== 1) {
      setCurrentPage(1)
    }

    if (selectedLicenciado)
      localStorage.setItem('@licenciadoAutorizadoLicensed', selectedLicenciado)

    if (currentPage === 1) {
      fetchlA()
    }
  }

  const handleRemoveFilter = (filterKey: string) => {
    localStorage.removeItem(filterKey)
    if (filterKey === '@licenciadoAutorizadoLicensed') {
      setSelectedLicenciado('')
    }
    fetchlA()
  }

  const activeFilters = [
    localStorage.getItem('@licenciadoAutorizadoLicensed') && {
      title: 'Licenciado Autorizado',
      onClick: () => handleRemoveFilter('@licenciadoAutorizadoLicensed')
    }
  ].filter((filter): filter is { title: string; onClick: () => void } =>
    Boolean(filter)
  )

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      setTriggerSearch(current => !current)
      if (currentPage !== 1) {
        setCurrentPage(1)
      }
    }
  }

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    if (searchValue.trim() !== '' && triggerSearch) {
      fetchlA(searchValue)
      setTriggerSearch(false)
    }
  }, [searchValue, currentPage, triggerSearch, fetchlA])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <S.Container>
        <LicenciadoHeader />


            <S.Input isFocused={isFocused}>
              <input
                type="text"
                placeholder="Pesquise por nome do licenciado"
                value={searchValue}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <S.SearchIcon isFocused onClick={handleSearch}>
                <MagnifyingGlass />
              </S.SearchIcon>
            </S.Input>



<S.ContainerButton>
              <S.ContentFilter>
                <BtnFilterModal
                  onClick={handleSaveToLocalStorage}
                  disabled={!selectedLicenciado}
                >
                  <CustomSelect
                    optionsData={{ options: fetchedOptions }}
                    placeholder="Digite aqui ou clique para ver a lista"
                    label="Licenciado Autorizado"
                    onChange={(selectedOption: {
                      value: SetStateAction<string>
                    }) => setSelectedLicenciado(selectedOption.value)}
                  />
                </BtnFilterModal>

                {activeFilters.length > 0 && (
                  <TagFilter filters={activeFilters} />
                )}
              </S.ContentFilter>
            </S.ContainerButton>

        {sellers.length > 0 && (
          <>
            <Tabela rows={sellers} />

            <S.ContainerCardsMobile>
              <LicensedCard rows={sellers} />
            </S.ContainerCardsMobile>

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
        )}
      </S.Container>
    </>
  )
}
