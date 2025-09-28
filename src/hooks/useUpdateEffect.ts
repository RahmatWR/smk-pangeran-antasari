import { useRef, useEffect } from "react";

export default function useUpdateEffect(
	effect: React.EffectCallback,
	deps: any[]
) {
	const isFirts = useRef(true);

	useEffect(() => {
		if (isFirts.current) {
			isFirts.current = false;
			return;
		}
		return effect();
	}, deps);
}
