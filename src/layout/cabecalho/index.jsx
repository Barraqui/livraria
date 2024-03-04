import { defineComponent, ref } from 'vue';
import MegaMenu from 'primevue/megamenu';

import './index.css';

export default defineComponent({

    name: 'cabecalho',
    setup(){

        const menus = ref([
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                        }
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }]
                        }
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                        }
                    ],
                    [
                        {
                            label: 'Office',
                            items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                        }
                    ]
                ]
            },
        ])

        return {

            menus
        }

    },
    render(){

        return (
            <div style='width: 100%; background-color: khaki; height: 80px'>
                Header

                <div class="card">
                    {/*<MegaMenu*/}
                    {/*    model={this.menus}*/}
                    {/*/>*/}
                </div>
            </div>
        );
    }
});
