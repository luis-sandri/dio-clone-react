export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
    disabled?: boolean;
}

export interface IButtonStyled {
    variant: string;
}