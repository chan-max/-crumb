import { onMounted, useProps, useParent } from 'crushed'

export const crButtonGroup = {
    template: /*html*/`
        <div .cr-button-group>
            <style>
                button{
                    color!:red;
                }
            </style>
            <slot>
        </div>
    `,
    create() {
        onMounted(() => {

        })
    }
}

export const crButton = {
    props: {
        color: {
            default: '#00c1de',
        },
        type: {
            default: ''
        },
        disabled: {
            default: false
        }
    },
    template: /*html*/`
        <style scoped>
            .cr-button{
                transition:all 0.3s;
                color:#fff;
                padding: 7px 15px;
                border:none;
                $box-shadow: ['5px','5px','20px',opacity(color,0.25)];
                $cursor: disabled ?  'not-allowed' : 'pointer';
                $background-color:color;
                border-radius:3px;
                &:hover{
                    $background-color:darken(color,7);
                }
                &:focus{
                    outline:0;
                    $box-shadow:[0, 0, 0 ,'0.25rem', opacity(color,0.25)];
                }
            }
        </style>
        <button .cr-button>
            <slot>
        </button>
    `,
    create({
        $instance
    }: any) {
    }
}
