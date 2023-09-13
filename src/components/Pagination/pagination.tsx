import { useState } from 'react';
import * as S from './styled'
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface PaginationProps {
  totalPages: number ;
  onNextPage: (page: number) => void;
  onPrevPage: (page: number) => void;
  onPageClick: (page: number) => void;
}

export function Pagination({ totalPages, onNextPage, onPrevPage, onPageClick }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(2);

  const handleNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
    onNextPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
    onPrevPage(prevPage);
  };

  const getPages = () => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 3);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageClick(page);
  };


  return (
    <S.Container>
      <S.Button onClick={handlePrevPage} disabled={currentPage === 1}>
          <CaretLeft  />
      </S.Button>
      {getPages().map((page) => (
        <S.Page key={page} onClick={() => handlePageClick(page)}>
          {page === currentPage ? <S.CurrentPage>{page}</S.CurrentPage> : page}
        </S.Page>
      ))}
      <S.Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <CaretRight  />
      </S.Button>
    </S.Container>
  );
};
