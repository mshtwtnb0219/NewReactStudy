import { useCallback } from "react"
import { toaster } from "../components/ui/toaster";


type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
    const showMessage = useCallback(({ title, status }: Props) => {
        toaster.create({
            title: title,
            type: status,
            duration: 2000,
        })

    }, [])
    return (
        { showMessage }
    )
}