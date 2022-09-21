import { createApp } from 'crushed'
import { crButton ,crButtonGroup} from './components/crButton'
import 'font-awesome/css/font-awesome.min.css'
let root = {
    template:/*html*/ `
        <cr-button-group>
            <cr-button > click </cr-button>
            <cr-button> click </cr-button>
            <cr-button> click </cr-button>
        </cr-button-group>
    `,
    create({ $self }: any) {
        $self.i = 0
        $self.add = () => $self.i++
    }
}



let app = createApp(root)

app.component('crButton', crButton)
app.component('crButtonGroup', crButtonGroup)


app.mount()
