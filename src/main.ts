import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePannellum from 'vue-pannellum'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueTailwind, { Vue3Tailwind } from 'vue3-tailwind'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Toaster from "@meforma/vue-toaster";

import { 
    faPenToSquare,
    faTrash,
    faUserPlus,
    faKey,
    faUserXmark,
    faUserCheck,
    faUserPen,
    faColumns,
    faAddressCard,
    faRightFromBracket,
    faUserLock,
    faUser,
    faUnlock,
    faIdCard,
    faEnvelope,
    faMobile,
    faCity,
    faLocationDot,
    faLocationPin,
    faListOl,
    faFileText,
    faClock,
    faCalendar,
    faBuilding,
    faPerson,
    faFile,
    faFileLines,
    faChevronLeft,
    faUsers,
    faTicket,
    faLightbulb,
    faPhone,
    faPassport,
    faUserGear,
    faPlus,
    faList,
    faCodeCommit,
    faSignature,
    faToggleOn,
    faToggleOff,
    faBook,
    faCreditCard,
    faFileExport,
    faFileExcel,
    faFileArrowUp,
    faGear,
    faFilter,
    faListNumeric,
    faMagnifyingGlass,
    faFileUpload,
    faFileSignature,
    faFileInvoice,
    faCashRegister,
    faHouse,
    faLayerGroup,
    faMapLocation,
    faHouseMedical,
    faSortNumericAsc,
    faCrutch,
    faBarcode,
    faTurnUp,
    faMoneyBill,
    faFilePdf,
    faFileContract
} from '@fortawesome/free-solid-svg-icons'
import { 
    faFacebook, 
    faInstagram, 
    faTwitter, 
    faYoutube 
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faTrash,
    faUserPlus,
    faPenToSquare,
    faKey,
    faUserXmark,
    faUserCheck,
    faUserPen,
    faColumns,
    faAddressCard,
    faRightFromBracket,
    faUserLock,
    faUser,
    faUnlock,
    faIdCard,
    faEnvelope,
    faMobile,
    faCity,
    faLocationDot,
    faLocationPin,
    faListOl,
    faFileText,
    faClock,
    faCalendar,
    faBuilding,
    faPerson,
    faFile,
    faFileLines,
    faChevronLeft,
    faUsers,
    faTicket,
    faLightbulb,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faPhone,
    faPassport,
    faUserGear,
    faPenToSquare,
    faPlus,
    faList,
    faCodeCommit,
    faSignature,
    faToggleOn,
    faToggleOff,
    faBook,
    faCreditCard,
    faFileExport,
    faFileExcel,
    faFileArrowUp,
    faGear,
    faFilter,
    faListNumeric,
    faMagnifyingGlass,
    faFileUpload,
    faFileSignature,
    faFileInvoice,
    faCashRegister,
    faHouse,
    faIdCard,
    faSignature,
    faLayerGroup,
    faMapLocation,
    faLocationDot,
    faHouseMedical,
    faSortNumericAsc,
    faCrutch,
    faBarcode,
    faTurnUp,
    faMoneyBill,
    faFilePdf,
    faFileContract
)

createApp(App)
    .use(store)
    .use(router)
    .use(Toaster)
    .use(Vue3Tailwind)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('VPannellum', VuePannellum)
    .mount('#app')
