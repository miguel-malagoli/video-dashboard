// react
import { createContext, PropsWithChildren, useState } from 'react';

type SidebarContextData = {
    isOpenDesktop: boolean;
    isOpenMobile: boolean;
    setIsOpenDesktop: (open: boolean) => void;
    setIsOpenMobile: (open: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextData>({
    isOpenDesktop: true,
    isOpenMobile: false,
    setIsOpenDesktop: () => {},
    setIsOpenMobile: () => {}
});

export default function SidebarProvider(props: PropsWithChildren) {
    const [isOpenDesktop, setIsOpenDesktop] = useState(true);
    const [isOpenMobile, setIsOpenMobile] = useState(false);

    return (
        <SidebarContext.Provider
            value={{
                isOpenDesktop,
                isOpenMobile,
                setIsOpenDesktop,
                setIsOpenMobile
            }}
        >
            {props.children}
        </SidebarContext.Provider>
    );
}
