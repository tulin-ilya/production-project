import { ErrorFallback } from "@widgets/error-fallback";
import React, { ErrorInfo, Suspense } from "react";

import type { TErrorBoundaryProps, TErrorBoundaryState } from "./models";

class ErrorBoundary extends React.Component<
    TErrorBoundaryProps,
    TErrorBoundaryState
> {
    constructor(props: TErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback="">
                    <ErrorFallback error={error} />
                </Suspense>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
