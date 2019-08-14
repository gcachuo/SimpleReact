interface Toastr {
    success(message: string, title?: string, settings?: {timeOut: number}): void;

    error(message: string, title?: string, settings?: {timeOut: number}): void;

    info(message: string, title?: string, settings?: {timeOut: number}): void;
}