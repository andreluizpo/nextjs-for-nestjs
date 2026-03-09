import {
    format,
    formatDistanceToNow as formatDistanceToNowDateFns,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: ptBR,
    });
}

export function formatDistanceToNow(rawDate: string): string {
    const date = new Date(rawDate);

    return formatDistanceToNowDateFns(date, {
        locale: ptBR,
        addSuffix: true,
    });
}

export function formatHour(timestamp: number): string {
    const date = new Date(timestamp);

    return format(date, "HH:mm:ss", {
        locale: ptBR,
    });
}
