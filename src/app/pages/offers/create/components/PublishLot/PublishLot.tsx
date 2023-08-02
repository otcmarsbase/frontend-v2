import {FC, ReactNode} from "react";
import {Button} from "@chakra-ui/react";

export const PublishLot: FC<{ onPublishLot: () => void, children: ReactNode, isActive:boolean }> = ({onPublishLot, children, isActive}) => {
    return (
        <Button
            onClick={onPublishLot}
            w={'100%'}
            h={'4rem'}
            borderRadius={'8px'}
            opacity={'0.20000000298023224'}
            isActive={isActive}
            // background={'var(--ui-kit-dark-200, #686A6E)'}
            // _hover={{ bg: '#ebedf0' }}
            _active={{
                bg: 'var(--linear, linear-gradient(140deg, #FF6639 0%, #7E25B5 100%))',
                opacity: 1
            }}
        >
            {children}
        </Button>
    )
}
