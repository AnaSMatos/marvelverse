import { InputContainer } from "./styles"

type SearchProps = {
    onChangeValue: (value: string) => void,
    placeholder: string,
    onSearch: () => void
}

export const SearchInput = ({onChangeValue, placeholder, onSearch}: SearchProps) => {
    return (
        <InputContainer>
            <input 
                type="text" 
                placeholder={placeholder}
                onChange={(e) => onChangeValue(e.target.value)}
            />
            <button onClick={onSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </InputContainer>            
    )
}