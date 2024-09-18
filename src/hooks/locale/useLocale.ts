"use client";

import { useRouter } from "next/navigation";

export default function useLocale() {
    const { locale }: any = useRouter();
    return locale;
}
