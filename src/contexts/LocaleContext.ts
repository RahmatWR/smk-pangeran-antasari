import { createContext } from "react";

interface LocaleContextType {
	locale: string;
	toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
	locale: "id",
	toggleLocale: () => {},
});

export const LocaleProvider = LocaleContext.Provider;

export default LocaleContext;
