interface InputProps {
    type: string;
    placeholder: string;
}
export function Input({ type, placeholder }: InputProps) {
    return (
        <input type={type} placeholder={placeholder} />
    );
};