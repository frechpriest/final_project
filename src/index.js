import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { firebase } from './firebase/firebase'
import styles from './index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)

//components
import Header from '../src/components/header/header'
import Footer from "../src/components/footer/footer"
import Legal from '../src/components/legal/legal'
import Routes from '../src/components/routes'


class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            islegal:true
        }
    }

    legal(){
        this.setState({
            islegal:true
        })
    }

    
    render() {
        return (
            <BrowserRouter>
                {this.state.islegal ?
                    <div className={styles.container} >
                        <Header />
                        <Routes{...this.props} />
                        <Footer />
                    </div>
                    :
                    <Legal legal={()=>this.legal()}/>
                    }
            </BrowserRouter>
        )
    }
};

firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App auth={user} />, document.getElementById('app'));
})
