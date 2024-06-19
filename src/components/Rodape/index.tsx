import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import google from './assets/google.png';
import { RodapeEstilizado, ListaEstilizada, ItemEstilizado } from './styles'

export const Rodape = () => {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#"><img src={facebook} alt="logo facebook" /></a>
          <a href="#"><img src={instagram} alt="logo instagram" /></a>
          <a href="#"><img src={whatsapp} alt="logo whatsapp" /></a>
          <a href="#"><img src={google} alt="logo google" /></a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>2023 Desenvolvido por alura | Projeto Fictício sem fins comerciais</p>
    </RodapeEstilizado>
  );
}