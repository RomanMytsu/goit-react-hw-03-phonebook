import { FilterContainer, FilterInput, FilterLabel } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel htmlFor="nameFilterInput">Find contacts by name</FilterLabel>
      <FilterInput
        id="nameFilterInput"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
};
