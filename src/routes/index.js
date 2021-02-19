
import { 
    createAppContainer, 
    createSwitchNavigator
} from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Lista from '../screens/Lista';

const Rotas = {
    Home: {
        nome: "Home",
        screen: Home
    },
    Login: {
        nome: "Login",
        screen: Login
    },
    Lista: {
        nome: "Lista",
        screen: Lista
    }
}

// Criar as rotas
const Navegacao = createSwitchNavigator(Rotas);

// passar para o App
export default createAppContainer(Navegacao);