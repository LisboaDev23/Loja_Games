import { TagContainer } from './styles'

//criando um tipo Props para trabalharmos com propriedades do elemento
//pois ele poderá ser uma tag pequena ou grande
export type Props = {
  size?: 'small' | 'big'
  children: string //tipo JSX
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
