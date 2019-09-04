interface Toastr {
    success(message: string, title?: string, settings?: { timeOut?: number, extendedTimeOut?: number }): void;

    error(message: string, title?: string, settings?: { timeOut?: number, extendedTimeOut?: number }): void;

    info(message: string, title?: string, settings?: { timeOut?: number, extendedTimeOut?: number }): void;

    warning(message: string, title?: string, settings?: { timeOut?: number, extendedTimeOut?: number }): void;

    clear(): void;
}