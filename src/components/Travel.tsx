import {createElement, ElementType} from "react";
import {Future} from "@/future";
import {Alert, AlertTitle} from "@mui/material";

export interface TravelProps<T> {
    future: Future<T>
    component: ElementType
    field: string
}

export default function Travel<T, C extends ElementType>({future, component, field}: TravelProps<T>) {
    if ('reason' in future) return <Reason {...future.reason}/>
    return createElement(component, {[field]: future.result})
}

function Reason({name, message, stack}: { name: string, message: string, stack?: string }) {
    const error = new Error()
    error.name = name
    error.message = message
    error.stack = `${error.stack ?? ''}${stack ?? ''}`
    console.error(error)
    return <Alert severity="error">
        <AlertTitle>{name}</AlertTitle>
        <pre>{message}</pre>
    </Alert>
}
