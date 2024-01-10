import React from 'react';
import { OperationSummaryCard, Transaction } from './operationSummaryCard ';


export interface OperationsSummaryListProps {
  transactions: Transaction[];
}

export function OperationsSummaryList({ transactions }: OperationsSummaryListProps) {
  return (
    <>
      {transactions.map((transaction) => (
        <OperationSummaryCard
          key={transaction.id}
          comissao={transaction.comissao}
          gap={transaction.gap}
          fornecedor={transaction.fornecedor}
          meta={transaction.meta}
          tpv={transaction.tpv} id={0}        />
      ))}
    </>
  );
}
