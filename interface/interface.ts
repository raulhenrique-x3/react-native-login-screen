export interface IProps {
  nome?: string;
  id?: number;
  telefone?: string;
  navigation?: any;
  email?: string;
  text?: string;
  onChangeText?: (val: string) => void;
  textInput1?: string;
  value?: React.ReactNode | any;
}
