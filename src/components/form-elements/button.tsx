import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ type = 'button', ...props }) => {
  return <button type={type} {...props} />
}
