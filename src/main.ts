import { createApp } from 'crushed'
import { crButton ,crButtonGroup} from './components/crButton'
import 'font-awesome/css/font-awesome.min.css'
let root = {
    template:/*html*/ `
            <cr-button > click </cr-button>
            <cr-button> click </cr-button>
            <cr-button> click </cr-button>
    `,
    create({ $self }: any) {
        $self.i = 0
        $self.add = () => $self.i++
    }
}



let app = createApp(root)

app.component('crButton', crButton)


app.mount()
