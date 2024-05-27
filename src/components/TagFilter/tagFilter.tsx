import { X } from "@phosphor-icons/react";
import { BalloonContainer, ContainerTagFilter } from "./styles";

interface Filter {
    title: string;
    onClick: () => void;
}

interface TagFilterProps {
    filters: Filter[];
}

export function TagFilter({ filters }: TagFilterProps) {
    return (
        <ContainerTagFilter>
            <h3>Filtros:</h3>
            {filters.map((filter, index) => (
                <BalloonContainer key={index}>
                    <p>{filter.title}</p>
                    <button type="button" onClick={filter.onClick}><X /></button>
                </BalloonContainer>
            ))}
        </ContainerTagFilter>
    );
}
