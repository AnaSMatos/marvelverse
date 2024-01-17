import { InfiniteScrollFooter } from "./styles"
import { TailSpin } from "react-loader-spinner"

type ScrollFooterProps = {
    isLoading: boolean;
  }

export const ScrollFooter = ({isLoading}: ScrollFooterProps) => {
    return(
        <>
            {isLoading && 
                <InfiniteScrollFooter>
                    <TailSpin
                        color="#4c7ec2"
                        height={40}
                    />
                </InfiniteScrollFooter>
            }
        </>
    )
}