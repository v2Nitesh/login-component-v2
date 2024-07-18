type HelloWorldProps = {
    firstName: string;
    lastName?: string;
    age?: string;
};

declare function helloWorld({ firstName, lastName, age }: HelloWorldProps): void;

interface LoginProps {
    isPrimaryButton?: boolean;
    titleColor?: string;
    buttonSize?: "small" | "medium" | "large";
    buttonLabel: string;
    loginClick?: () => void;
    emailRegex?: string;
    passwordRegex?: string;
}
declare const Login: ({ isPrimaryButton, buttonSize, titleColor, buttonLabel, ...props }: LoginProps) => JSX.Element;

interface V2ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
declare const V2Button: ({ primary, size, backgroundColor, label, ...props }: V2ButtonProps) => JSX.Element;

export { type HelloWorldProps, Login, type LoginProps, V2Button, type V2ButtonProps, helloWorld };
