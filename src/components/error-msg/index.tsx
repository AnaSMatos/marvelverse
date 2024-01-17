import { ErrorContainer } from "./styles";

export const ErrorMessage = () => {
    return(
        <ErrorContainer>
            <div>
                <i className="fa-solid fa-triangle-exclamation"></i>
                Falha ao carregar dados. Por favor, verifique suas credenciais.
            </div>
        </ErrorContainer>
    )
}