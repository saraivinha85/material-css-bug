import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
    component: App,
    configuration: {
        tagname: 'aa-component',
    },
    plugins: [
        {
            name: 'font-loader',
            options: {
                google: {
                    families: ['Advent Pro', 'Noto Sans JP'],
                },
            }
        },
        {
            name: 'material-ui'
        }

    ],
});
