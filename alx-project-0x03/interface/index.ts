export interface PageRouteProps {
    pageRoute: string
}

export interface ButtonProps{
    buttonLabel: string
    buttonSize: string
    buttonBackgroundColor?:'red'|'blue'|'green'
    action?: () => void
}

export interface LayoutProps {
    children: ReactNode;
}